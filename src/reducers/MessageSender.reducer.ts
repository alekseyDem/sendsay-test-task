import { RemoteDataStatus } from '../RemoteData/RemoteData.component';
import { TNullOrError } from '../models/sharedModels';
import { MESSAGE_FORM_TYPES, TMessageSenderRequest, TMessageSenderResponse } from '../actions/messageSender.action';
import { createReducer } from './utils';

export type TMessageSenderState = {
    request?: TMessageSenderRequest,
    response?: TMessageSenderResponse,
    loadingStatus: RemoteDataStatus,
    errorMessage: TNullOrError
}

const initialState: TMessageSenderState = {
    loadingStatus: RemoteDataStatus.INITIAL,
    errorMessage: null
};

export const messageSenderReducer = createReducer(initialState, MESSAGE_FORM_TYPES);
