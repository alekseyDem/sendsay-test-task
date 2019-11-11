import {
    action, actionWithoutPayload,
    createRequestTypes,
    FAILURE,
    INITIAL,
    REQUEST,
    resetToInitialAction,
    SUCCESS,
    TAction, TActionEmpty,
    TPayload
} from './actions.utils';
import { TMessageHistoryItem } from '../components/messageHistory/messageHistoryController/MessageHistory.model';
export const MESSAGE_HISTORY_TYPES = createRequestTypes('MESSAGE_HISTORY');

export type TMessageHistoryError = {errorMessage: Error}
export type TMessageHistoryResponse = {
    data: TMessageHistoryItem[]
}

export const messageHistoryAction = {
    request: (): TActionEmpty => actionWithoutPayload(MESSAGE_HISTORY_TYPES[REQUEST]),
    success: (response: TMessageHistoryResponse): TAction<TMessageHistoryResponse> => action(MESSAGE_HISTORY_TYPES[SUCCESS], response),
    failure: (errorMessage: Error): TAction<TMessageHistoryError> => action(MESSAGE_HISTORY_TYPES[FAILURE], {errorMessage}),
    initial: (): TPayload => resetToInitialAction(MESSAGE_HISTORY_TYPES[INITIAL]),
};
