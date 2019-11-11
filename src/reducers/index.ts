import { combineReducers } from 'redux'
import { messageSenderReducer, TMessageSenderState } from './MessageSender.reducer';
import { messageHistoryReducer, TMessageHistoryState } from './MessageHistory.reducer';

export type ApplicationState = {
    messageSenderReducer: TMessageSenderState,
    messageHistoryReducer: TMessageHistoryState
}

export const rootReducer = combineReducers<ApplicationState>({
    messageSenderReducer,
    messageHistoryReducer
});
