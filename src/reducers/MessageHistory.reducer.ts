import { RemoteDataStatus } from '../RemoteData/RemoteData.component';
import { createASyncReducer } from './utils';
import { TNullOrError } from '../models/sharedModels';
import { MESSAGE_HISTORY_TYPES } from '../actions/messageHistory.action';
import { TMessageHistoryItem } from '../components/messageHistory/messageHistoryController/MessageHistory.model';

export type TMessageHistoryState = {
    data: TMessageHistoryItem[],
    loadingStatus: RemoteDataStatus,
    errorMessage: TNullOrError
}

const initialState: TMessageHistoryState = {
    data: [],
    loadingStatus: RemoteDataStatus.SUCCESS,
    errorMessage: null
};

export const messageHistoryReducer = createASyncReducer(initialState, MESSAGE_HISTORY_TYPES);
