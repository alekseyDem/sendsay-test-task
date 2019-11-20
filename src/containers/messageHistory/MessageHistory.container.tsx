import { Dispatch } from 'react'
import { ApplicationState } from '../../reducers';
import { TAction, TActionEmpty, TPayload } from '../../actions/actions.utils';
import { connect } from 'react-redux';
import { messageHistoryAction } from '../../actions/messageHistory.action';
import { MessageHistoryController } from '../../components/messageHistory/messageHistoryController/MessageHistory.controller';
import { TNullOrError } from '../../models/sharedModels';
import { RemoteDataStatus } from '../../RemoteData/RemoteData.component';
import { selectedMessagesAction } from '../../actions/selectedHistoryItem.action';
import { TMessageHistoryItem } from '../../components/messageHistory/messageHistoryController/MessageHistory.model';

export type TMessageHistoryContainerProps = {
    getHistory: () => void,
    errorMessage: TNullOrError,
    loadingStatus: RemoteDataStatus,
    setSelectedItem: (item: TMessageHistoryItem) => void,
    deleteSelectedHistoryItem: (id: number) => void,
    selectedHistoryItems: TMessageHistoryItem[]
    data: TMessageHistoryItem[]
}

const mapStateToProps = (state: ApplicationState) => {
    const { loadingStatus, errorMessage, data } = state.messageHistoryReducer;
    const { selectedHistoryItems } = state.selectedHistoryItemsReducer;
    return { loadingStatus, errorMessage, data, selectedHistoryItems}
};

const mapDispatchToProps = (dispatch: Dispatch<TAction<TActionEmpty> | TPayload >) => ({
    getHistory: () => dispatch(messageHistoryAction.request()),
    setSelectedItem: (selectedItem: TMessageHistoryItem) => dispatch(selectedMessagesAction.set(selectedItem)),
    deleteSelectedHistoryItem: (id: number) => dispatch(selectedMessagesAction.delete({id}))
});

export const MessageHistoryContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MessageHistoryController);
