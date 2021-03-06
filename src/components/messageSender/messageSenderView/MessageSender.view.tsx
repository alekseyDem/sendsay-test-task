import React, { ChangeEvent, PureComponent } from 'react';
import css from './MessageSender.module.scss'
import { UIAttachedFileView } from '../../../UI/AttachedFileView/AttachedFileView';
import { UIInputFile } from '../../../UI/Form/FileInput/InputFile';
import { formFieldGrouped, formFieldSingle } from './MessageSender.config';
import { UIButton } from '../../../UI/Button/Button';
import { INPUT_POSITION } from '../../../UI/Form/TextInput/TextInput.model';
import { DropZone } from '../../../UI/Form/DropZone/DropZone';
import { TAttachedFile, TMessageSenderControllerState } from '../messageSenderController/MessageSender.model';
import { UIInputField } from '../../../UI/Form/TextInput/Input/Input';
import { UITextArea } from '../../../UI/Form/TextInput/TextArea/TextArea';


type TMessageSenderViewProps = {
    data: TMessageSenderControllerState,
    applyForm: () => void,
    onDeleteFile: (fileName: string) => void,
    onInputFilesChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onDropZoneChange: (files: FileList) => void,
    onSenderNameChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onSenderEmailChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onRecipientNameChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onRecipientEmailChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onEmailTitleChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onLetterContentChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export class MessageSenderView extends PureComponent<TMessageSenderViewProps> {
    render(){
        //#region destruction props
        const {
            data: {
                senderName,
                senderEmail,
                recipientEmail,
                recipientName,
                emailTitle,
                attachedFiles,
                content,
                filesErrorList,
                textFieldsErrors: {
                    senderEmailErrorMessage,
                    recipientEmailErrorMessage,
                },
                messageSymbolsLeft
            },
            applyForm,
            onDeleteFile,
            onInputFilesChange,
            onDropZoneChange,
            onSenderNameChange,
            onSenderEmailChange,
            onRecipientNameChange,
            onRecipientEmailChange,
            onEmailTitleChange,
            onLetterContentChange
        } = this.props;
        //#endregion
        return (
            <div className={css.messageSender}>
                <h4>
                    Отправлялка сообщений
                </h4>
                {/*TODO TO form*/}
                <div>
                    <DropZone
                        onDropHandler={onDropZoneChange}>
                    <div>
                        <div className={formFieldGrouped}>
                            <UIInputField
                                value={senderName}
                                onChange={onSenderNameChange}
                                fieldName={'senderName'}
                                placeholder={'Имя'}
                                labelText={'От кого'}
                                inputPosition={INPUT_POSITION.LEFT}
                            />
                            <UIInputField
                                value={senderEmail}
                                onChange={onSenderEmailChange}
                                fieldName={'senderEmail'}
                                placeholder={'Email'}
                                errorMessage={senderEmailErrorMessage}
                                inputPosition={INPUT_POSITION.RIGHT}
                            />
                        </div>
                        <div className={formFieldGrouped}>
                            <UIInputField
                                value={recipientName}
                                onChange={onRecipientNameChange}
                                fieldName={'recipientName'}
                                placeholder={'Имя'}
                                labelText={'Кому'}
                                inputPosition={INPUT_POSITION.LEFT}
                            />
                            <UIInputField
                                value={recipientEmail}
                                onChange={onRecipientEmailChange}
                                fieldName={'recipientEmail'}
                                placeholder={'Email'}
                                errorMessage={recipientEmailErrorMessage}
                                inputPosition={INPUT_POSITION.RIGHT}
                            />
                        </div>
                        <div className={formFieldSingle}>
                            <UIInputField
                                value={emailTitle}
                                onChange={onEmailTitleChange}
                                fieldName={'title'}
                                placeholder={'Тема письма'}
                            />
                        </div>
                        <div className={formFieldSingle}>
                            <UITextArea
                                value={content}
                                onChange={onLetterContentChange}
                                fieldName={'content'}
                                placeholder={'Сообщение'}
                            />
                            <div className={css.symbolsLeft}>Осталось <span>{messageSymbolsLeft}</span> символов</div>
                        </div>
                    </div>
                    </DropZone>
                    {attachedFiles.length > 0 && <div className={css.fileAttachedPreview}>
                        {attachedFiles.map((file: TAttachedFile, i: number) => {
                            return <UIAttachedFileView
                                key={i}
                                fileName={file.name}
                                onDelete={onDeleteFile}
                            />
                        })}
                    </div>}
                    <div className={css.uploadFileBtnWrapper}>
                        <UIInputFile
                            onChange={onInputFilesChange}
                        />
                        {filesErrorList.map((error: string, i: number) => <p key={i} className={css.fileError}>{error}</p>)}
                    </div>
                    <div className={css.sendBtnWrapper}>
                        <UIButton onClick={applyForm} text={'Отправить'}/>
                    </div>
                </div>
            </div>
        )
    }
}
