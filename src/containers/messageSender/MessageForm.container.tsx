import { Dispatch } from 'react'
import { ApplicationState } from '../../reducers';
import { TAction, TActionEmpty, TPayload } from '../../actions/actions.utils';
import { connect } from 'react-redux';
import { messageSenderAction, TMessageSenderRequest } from '../../actions/messageSender.action';
import { MessageSenderController } from '../../components/messageSender/messageSenderController/MessageSender.controller';
import { RemoteDataStatus } from '../../RemoteData/RemoteData.component';
import { TNullOrError } from '../../models/sharedModels';
import { MessageSenderSuccessView } from '../../components/messageSender/messageSenderSuccess/messageSenderSuccess.view';


export type TMessageSenderContainerProps = {
    sendMessage: (request: TMessageSenderRequest) => void,
    errorMessage: TNullOrError,
    loadingStatus: RemoteDataStatus
}

const mapStateToProps = (state: ApplicationState) => {
    const { loadingStatus, errorMessage } = state.messageSenderReducer;
    return { loadingStatus, errorMessage}
};

const mapDispatchToProps = (dispatch: Dispatch<TAction<TMessageSenderRequest> | TPayload >) => ({
    sendMessage: (request: TMessageSenderRequest) => dispatch(messageSenderAction.request(request)),
});

export const MessageSenderContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MessageSenderController);


const mapDispatchToPropsSuccessContainer = (dispatch: Dispatch<TActionEmpty>) => ({
    reset: () => dispatch(messageSenderAction.initial()),
});

export const MessageSenderSuccessContainer = connect(null, mapDispatchToPropsSuccessContainer,
)(MessageSenderSuccessView);
