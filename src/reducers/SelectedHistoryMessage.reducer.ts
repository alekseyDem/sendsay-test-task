import {SELECTED_MESSAGES_TYPES } from '../actions/selectedHistoryItem.action';
import { TMessageHistoryItem } from '../components/messageHistory/messageHistoryController/MessageHistory.model';
import { DELETE, SET, TAction } from '../actions/actions.utils';

export type TSelectedHistoryItemsState = {
    selectedHistoryItems: TMessageHistoryItem[]
}

const initialState: TSelectedHistoryItemsState = {
    selectedHistoryItems: [],
};

export type Tid = {id: number}

export const selectedHistoryItemsReducer = (state = initialState, action: TAction<TMessageHistoryItem | Tid>) => {
    switch (action.type) {
        case SELECTED_MESSAGES_TYPES[SET]:
            return   {
            selectedHistoryItems: [...state.selectedHistoryItems, action.payload as TMessageHistoryItem]
        }   ;
        case SELECTED_MESSAGES_TYPES[DELETE]:
            return  {
                selectedHistoryItems: state.selectedHistoryItems.filter(element => element.id !== action.payload.id)
            };
        default:
            return state;
    }
}
