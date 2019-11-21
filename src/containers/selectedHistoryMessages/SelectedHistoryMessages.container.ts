import { Dispatch } from 'react'
import { ApplicationState } from '../../reducers';
import { TAction } from '../../actions/actions.utils';
import { connect } from 'react-redux';
import { SelectedHistoryView } from '../../components/selectedMessages/SelectedHistory.view';
import { selectedMessagesAction } from '../../actions/selectedHistoryItem.action';
import { Tid } from '../../reducers/SelectedHistoryMessage.reducer';

const mapStateToProps = (state: ApplicationState) => {
    const { selectedHistoryItems } = state.selectedHistoryItemsReducer;
    return { selectedHistoryItems }
};

const mapDispatchToProps = (dispatch: Dispatch<TAction<Tid>>) => ({
    deleteSelectedHistoryItem: (id: number) => dispatch(selectedMessagesAction.delete({id}))
});

export const SelectedMessagesContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SelectedHistoryView);
