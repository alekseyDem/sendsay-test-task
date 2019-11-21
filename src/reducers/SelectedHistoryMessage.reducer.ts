import {SELECTED_MESSAGES_TYPES } from '../actions/selectedHistoryItem.action';
import { TMessageHistoryItem } from '../components/messageHistory/messageHistoryController/MessageHistory.model';
import { DELETE, DELETE_BULK, SET, SET_BULK, TAction } from '../actions/actions.utils';

export type TSelectedHistoryItemsState = {
    selectedHistoryItems: TMessageHistoryItem[]
}

const initialState: TSelectedHistoryItemsState = {
    selectedHistoryItems: [],
};

export type Tid = {id: number}

export const selectedHistoryItemsReducer = (
    state = initialState, action: TAction<TMessageHistoryItem | Tid | TMessageHistoryItem[]>
):TSelectedHistoryItemsState  => {
    switch (action.type) {
        case SELECTED_MESSAGES_TYPES[SET]:
            return {
                selectedHistoryItems: [...state.selectedHistoryItems, action.payload as TMessageHistoryItem]
            };
        case SELECTED_MESSAGES_TYPES[DELETE]:
            const itemIdToDelete = action.payload as Tid;
            return  {
                selectedHistoryItems: state.selectedHistoryItems.filter(element => element.id !== itemIdToDelete.id)
            };
        case SELECTED_MESSAGES_TYPES[DELETE_BULK]:
            return  {
                selectedHistoryItems: []
            };
        case SELECTED_MESSAGES_TYPES[SET_BULK]:
            const bulkItems = action.payload as TMessageHistoryItem[];
            return  {
                selectedHistoryItems: bulkItems.slice()
            };
        default:
            return state;
    }
};
