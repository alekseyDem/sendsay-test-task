import {
    action,
    createAsyncRequestTypes,
    SUCCESS,
    FAILURE,
    REQUEST,
    INITIAL,
    TAction,
    resetToInitialAction,
    TPayload
} from './actions.utils';
import { TAttachedFile } from '../components/messageSender/messageSenderController/MessageSender.model';

export const MESSAGE_FORM_TYPES = createAsyncRequestTypes('MESSAGE_FORM');


export type TMessageSenderRequest = {
    request: {
        action: string,
        letter: {
            subject: string,
            "from.name": string,
            "from.email": string,
            "to.name": string,
            "message": {
                "text":  string
            },
            attaches: TAttachedFile[],
        },
        sendwhen: string,
        mca: string[]
    }
}
export type TMessageSenderError = {errorMessage: Error}

export type TMessageSenderResponse = {
    "track.id": number
}

export const messageSenderAction = {
    request: (request: TMessageSenderRequest): TAction<TMessageSenderRequest> => action(MESSAGE_FORM_TYPES[REQUEST], request),
    success: (response: TMessageSenderResponse): TAction<TMessageSenderResponse> => action(MESSAGE_FORM_TYPES[SUCCESS], response),
    failure: (errorMessage: Error): TAction<TMessageSenderError> => action(MESSAGE_FORM_TYPES[FAILURE], {errorMessage}),
    initial: (): TPayload => resetToInitialAction(MESSAGE_FORM_TYPES[INITIAL]),
};

