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

export const selectedHistoryItemsReducer = (state = initialState, action: TAction<TMessageHistoryItem | Tid | TMessageHistoryItem[]>) => {
    switch (action.type) {
        case SELECTED_MESSAGES_TYPES[SET]:
            return   {
            selectedHistoryItems: [...state.selectedHistoryItems, action.payload]
        }   ;
        case SELECTED_MESSAGES_TYPES[DELETE]:
            return  {
                //@ts-ignore
                selectedHistoryItems: state.selectedHistoryItems.filter(element => element.id !== action.payload.id)
            };
        case SELECTED_MESSAGES_TYPES[DELETE_BULK]:
            return  {
                selectedHistoryItems: []
            };
        case SELECTED_MESSAGES_TYPES[SET_BULK]:
            return  {
                //@ts-ignore
                selectedHistoryItems: action.payload.slice()
            };
        default:
            return state;
    }
}
