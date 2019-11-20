import moment from 'moment';
import { TFIELD, TMessageHistoryItem } from './MessageHistory.model';

export const sortNumAndString = (a: string | number, b: string | number, isSortOrderDesc: boolean): number => {
    if (a > b) return isSortOrderDesc ? 1 : -1;
    if (a < b) return isSortOrderDesc ? -1 : 1;
    return 0
};

export const sortDate = (dateA: string, dateB: string, isSortOrderDesc: boolean) => {
    const dateAInMS = moment(dateA).unix();
    const dateBInMS = moment(dateB).unix();
    return sortNumAndString(dateAInMS, dateBInMS, isSortOrderDesc)
};

export const changeSortOrder = (currentSortField: string, clickedSortField: TFIELD, isSortOrderDesc: boolean) => {
    return currentSortField === clickedSortField ? !isSortOrderDesc : !isSortOrderDesc;
};

export const sortByField = (
    data: TMessageHistoryItem[],
    sortField: TFIELD, isSortOrderDesc: boolean,
    sortFunc: (a: string | number, b: string | number, isSortOrderDesc: boolean) => number) => {
    return data.slice().sort((itemA: TMessageHistoryItem, itemB: TMessageHistoryItem) => {
            return sortFunc(itemA[sortField], itemB[sortField], isSortOrderDesc)
        }
    )
};
