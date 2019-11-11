import { Dispatch } from 'react'
import { ApplicationState } from '../../reducers';
import { TAction, TPayload } from '../../actions/actions.utils';
import { connect } from 'react-redux';
import { TMessageSenderRequest } from '../../actions/messageSender.action';
import { messageHistoryAction } from '../../actions/messageHistory.action';
import { MessageHistoryController } from '../../components/messageHistory/messageHistoryController/MessageHistory.controller';
import { TNullOrError } from '../../models/sharedModels';
import { RemoteDataStatus } from '../../RemoteData/RemoteData.component';

export type TMessageHistoryContainerProps = {
    getHistory: () => void,
    errorMessage: TNullOrError,
    loadingStatus: RemoteDataStatus
}

const mapStateToProps = (state: ApplicationState) => {
    const { loadingStatus, errorMessage, data } = state.messageHistoryReducer;
    return { loadingStatus, errorMessage, data}
};

const mapDispatchToProps = (dispatch: Dispatch<TAction<TMessageSenderRequest> | TPayload >) => ({
    getHistory: () => dispatch(messageHistoryAction.request()),
});

export const MessageHistoryContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MessageHistoryController);
