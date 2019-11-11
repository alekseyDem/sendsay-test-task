import { EMPTY_ARRAY, EMPTY_STRING } from '../../../utils/utils';
import { TMessageSenderControllerState } from './MessageSender.model';

export const MAX_SYMBOLS_FOR_MESSAGE = 200;

export const INITIAL_FILES_ERROR_LIST = {
    filesErrorList: [],
};

const INITIAL_TEXT_FIELD_ERROR_LIST = {
    senderNameErrorMessage: EMPTY_STRING,
    senderEmailErrorMessage: EMPTY_STRING,
    recipientNameErrorMessage: EMPTY_STRING,
    recipientEmailErrorMessage: EMPTY_STRING,
    contentErrorMessage: EMPTY_STRING,
    emailTitleErrorMessage: EMPTY_STRING,
};

const INITIAL_FIELDS_DATA = {
    senderName: EMPTY_STRING,
    senderEmail: EMPTY_STRING,
    recipientName: EMPTY_STRING,
    recipientEmail: EMPTY_STRING,
    emailTitle: EMPTY_STRING,
    attachedFiles: EMPTY_ARRAY,
    content: EMPTY_STRING
};


export const INITIAL_STATE: TMessageSenderControllerState = {
    ...INITIAL_FIELDS_DATA,
    textFieldsErrors: {...INITIAL_TEXT_FIELD_ERROR_LIST},
    ...INITIAL_FILES_ERROR_LIST,
    messageSymbolsLeft: MAX_SYMBOLS_FOR_MESSAGE
}
