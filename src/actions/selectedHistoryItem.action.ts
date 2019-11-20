import {
    action,
    createSyncRequestTypes,
    SET,
    DELETE,
    TAction,
} from './actions.utils';
import { TMessageHistoryItem } from '../components/messageHistory/messageHistoryController/MessageHistory.model';
import { Tid } from '../reducers/SelectedHistoryMessage.reducer';

export const SELECTED_MESSAGES_TYPES = createSyncRequestTypes('SELECTED_MESSAGES');

export const selectedMessagesAction = {
    set: (data: TMessageHistoryItem):  TAction<TMessageHistoryItem> => action(SELECTED_MESSAGES_TYPES[SET], data),
    delete: (id: Tid):  TAction<Tid> => action(SELECTED_MESSAGES_TYPES[DELETE], id),
};
