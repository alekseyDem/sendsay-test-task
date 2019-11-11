import React, { ChangeEvent, PureComponent } from 'react';
import { INITIAL_STATE, MAX_SYMBOLS_FOR_MESSAGE } from './MessageSender.fixture';
import { fileListToAttachedFileAsync } from '../../../UI/Form/utils';
import { getFileFormatFromFileName } from '../../../utils/utils';
import { MessageSenderView } from '../messageSenderView/MessageSender.view';
import { RemoteDataStatus, WithLoading } from '../../../RemoteData/RemoteData.component';
import {
    MessageSenderSuccessContainer,
} from '../../../containers/messageSender/MessageForm.container';
import { attachedFilesValidationRules, FIELDS_ERRORS, fieldsValidationRules } from './MessageSender.config';
import { getErrorMessageFromValidator, getOneErrorMessageFromErrorList } from './MessageSender.utils';
import css from './messageSenderContoller.module.scss';
import {
    TAttachedFile,
    TMessageSenderControllerProps,
    TMessageSenderControllerState,
    TStateKeys
} from './MessageSender.model';

export class MessageSenderController extends PureComponent<TMessageSenderControllerProps, TMessageSenderControllerState> {
    state = INITIAL_STATE;

    render() {
        const { loadingStatus, errorMessage} = this.props;
        return (
            <>
                {loadingStatus === RemoteDataStatus.INITIAL ? <MessageSenderView
                    data={this.state}
                    applyForm={this.applyForm}
                    onDeleteFile={this.onDeleteFile}
                    onInputFilesChange={this.onInputFilesChange}
                    onDropZoneChange={this.onDropZoneChange}
                    onSenderNameChange={this.onSenderNameChange}
                    onSenderEmailChange={this.onSenderEmailChange}
                    onRecipientNameChange={this.onRecipientNameChange}
                    onRecipientEmailChange={this.onRecipientEmailChange}
                    onEmailTitleChange={this.onEmailTitleChange}
                    onLetterContentChange={this.onLetterContentChange}
                /> : <div className={css.loadingWrapper}>
                    <div className={css.successMessage}>
                        <WithLoading
                            status={loadingStatus}
                            error={errorMessage}>
                            <MessageSenderSuccessContainer/>
                        </WithLoading>
                    </div>
                </div>
                }
            </>

        )
    }

    //#region apply form


    applyForm = () => {
        const {sendMessage} = this.props;
        const {
            senderName,
            senderEmail,
            recipientName,
            recipientEmail,
            emailTitle,
            content,
            attachedFiles
        } = this.state;
        if(this.isFieldsvalid()) {
            const requestObject = {
                request: {
                    action: 'issue.send.test',
                    letter: {
                        subject: emailTitle.trim(),
                        "from.name": senderName.trim(),
                        "from.email": senderEmail.trim(),
                        "to.name": recipientName.trim(),
                        "message": {
                            "text":  content.trim()
                        },
                        attaches: attachedFiles,
                    },
                    sendwhen: 'test',
                    mca: [
                        recipientEmail
                    ]
                }
            }
            sendMessage(requestObject)
            this.setState({
                ...INITIAL_STATE
            })
        }
    }

    //#endregion

    //#region validators
        validateTextFieldFields = (): boolean => {
        const {
            senderEmail,
            recipientEmail,
        } = this.state;
        const fieldsError = {
            senderEmailErrorMessage: getOneErrorMessageFromErrorList(fieldsValidationRules.senderEmail.map(field => getErrorMessageFromValidator(field, senderEmail))),
            recipientEmailErrorMessage: getOneErrorMessageFromErrorList(fieldsValidationRules.recipientEmail.map(field => getErrorMessageFromValidator(field, recipientEmail))),
        };
        this.setState({
            textFieldsErrors: {...fieldsError}
        });
        // @ts-ignore
        const isValid = Object.keys(fieldsError).every((error: string) => !fieldsError[error]);
        return isValid
    }

    isFieldsvalid = (): boolean => {
        const {
            filesErrorList
        } = this.state;
        return this.validateTextFieldFields() && !filesErrorList.length
    }
    //#endregion

    //#region text fields change handlers

    handleFieldChange = (fieldName: TStateKeys, value: string) => {
        // @ts-ignore
        this.setState({
            [fieldName]: value
        } as unknown)
    };


    onSenderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.handleFieldChange('senderName', e.target.value)
    };

    onSenderEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.handleFieldChange('senderEmail', e.target.value)
    };

    onRecipientNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.handleFieldChange('recipientName', e.target.value)
    };

    onRecipientEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.handleFieldChange('recipientEmail', e.target.value)
    };

    onEmailTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.handleFieldChange('emailTitle', e.target.value)
    };

    onLetterContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const symbolsInCurrentMessage = MAX_SYMBOLS_FOR_MESSAGE - e.target.value.length;
        if (symbolsInCurrentMessage >= 0) {
            this.setState({
                content: e.target.value,
                messageSymbolsLeft: symbolsInCurrentMessage
            })
        }
    };

    //#endregion

    //#region files change handlers
    handleFilesAdd = async (files : FileList) => {
        const fileList = files as FileList;
        const arrFiles = Array.from(fileList);
        const filesSizePerFile = arrFiles.map((file: File) => file.size);
        const filesFormats = arrFiles.map((file: File) => file.name).map(getFileFormatFromFileName);
        let filesErrorList = [
            getErrorMessageFromValidator(attachedFilesValidationRules.checkFileFormat, filesFormats),
            getErrorMessageFromValidator(attachedFilesValidationRules.checkTotalFilesSize, filesSizePerFile),
            getErrorMessageFromValidator(attachedFilesValidationRules.checkSingleFileSize, filesSizePerFile),
        ].filter(errorMessage => !!errorMessage);
        try {
            const attachedFiles = await fileListToAttachedFileAsync(arrFiles);
            if (!filesErrorList.length) {
                this.setState({
                    attachedFiles,
                    filesErrorList: []
                })
            } else {
                this.setState({
                    filesErrorList
                })
            }

        } catch (e) {
            filesErrorList.push(FIELDS_ERRORS.FILE_PARSE_ERROR);
            this.setState({
                filesErrorList
            })
        }
    };

    onInputFilesChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.handleFilesAdd(event.target.files as FileList)
    };

    onDropZoneChange = (files: FileList) => {
        this.handleFilesAdd(files)
    };

    onDeleteFile = (fileName: string) => {
        const { attachedFiles } = this.state;
        const updatedFileList = attachedFiles.filter((file: TAttachedFile) => fileName !== file.name);
        this.setState( {attachedFiles: updatedFileList})
    };

    //#endregion

}
