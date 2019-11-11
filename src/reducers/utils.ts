import { FAILURE, INITIAL, REQUEST, SUCCESS, TAction, TREQUEST_TYPE } from '../actions/actions.utils';
import { RemoteDataStatus } from '../RemoteData/RemoteData.component';

export const createReducer = <S, A>(initialState: S, request: TREQUEST_TYPE) => {
    return <S>(state = initialState, action: TAction<A>) => {
            switch (action.type) {
                case request[REQUEST]:
                    return {...state, loadingStatus: RemoteDataStatus.LOADING};
                case request[FAILURE]:
                    return {...state, ...action.payload, loadingStatus: RemoteDataStatus.FAILURE};
                case request[SUCCESS]:
                    return {...state, ...action.payload, loadingStatus: RemoteDataStatus.SUCCESS};
                case request[INITIAL]:
                    return initialState;
                default:
                    return initialState;
            }
        }
};
