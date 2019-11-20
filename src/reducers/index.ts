import { combineReducers } from 'redux'
import { messageSenderReducer, TMessageSenderState } from './MessageSender.reducer';
import { messageHistoryReducer, TMessageHistoryState } from './MessageHistory.reducer';
import { selectedHistoryItemsReducer, TSelectedHistoryItemsState } from './SelectedHistoryMessage.reducer';

export type ApplicationState = {
    messageSenderReducer: TMessageSenderState,
    messageHistoryReducer: TMessageHistoryState,
    selectedHistoryItemsReducer: TSelectedHistoryItemsState
}

export const rootReducer = combineReducers<ApplicationState>({
    messageSenderReducer,
    messageHistoryReducer,
    selectedHistoryItemsReducer
});
