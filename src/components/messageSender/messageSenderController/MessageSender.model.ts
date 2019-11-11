import { TMessageSenderContainerProps } from '../../../containers/messageSender/MessageForm.container';
import { TBase64 } from '../../../UI/Form/utils';

export type TMessageSenderControllerProps = TMessageSenderContainerProps

export type TAttachedFile = {
    name: string,
    content: TBase64,
    encoding: string
}

export type TFieldsState = {
    senderName: string,
    senderEmail: string,
    recipientName: string,
    recipientEmail: string,
    emailTitle: string,
    content: string,
    attachedFiles: TAttachedFile[],
}

export type TFieldsErrors = {
    filesErrorList: string[],
    textFieldsErrors: TTextFieldsErrors
}

export type TTextFieldsErrors = {
    senderEmailErrorMessage: string,
    recipientEmailErrorMessage: string,
}

export type TMessageSenderControllerState = TFieldsState & TFieldsErrors & {
    messageSymbolsLeft: number
}

export type TStateKeys = keyof TFieldsState;

export type TVALIDATOR_RULE<T> = {
    validator: (data: T) => boolean,
    errorMessage: string
}
