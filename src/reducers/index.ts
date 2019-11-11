import { combineReducers } from 'redux'
import { messageSenderReducer, TMessageSenderState } from './MessageSender.reducer';
import { messageHistoryReducer, TMessageHistoryState } from './messageHistory.reducer';

export type ApplicationState = {
    messageSenderReducer: TMessageSenderState,
    messageHistoryReducer: TMessageHistoryState
}

export const rootReducer = combineReducers<ApplicationState>({
    messageSenderReducer,
    messageHistoryReducer
});
