import { RemoteDataStatus } from '../RemoteData/RemoteData.component';
import { createReducer } from './utils';
import { TNullOrError } from '../models/sharedModels';
import { MESSAGE_HISTORY_TYPES } from '../actions/messageHistory.action';

export type TMessageHistoryState = {
    data: any[],
    loadingStatus: RemoteDataStatus,
    errorMessage: TNullOrError
}

const initialState: TMessageHistoryState = {
    data: [],
    loadingStatus: RemoteDataStatus.SUCCESS,
    errorMessage: null
};

export const messageHistoryReducer = createReducer(initialState, MESSAGE_HISTORY_TYPES);
