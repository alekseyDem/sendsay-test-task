export type TMessageHistoryItem = {
    date: string;
    theme: string;
    status: number
}


export type TFIELD = 'theme' | 'date' | 'status'
export const SORT_FIELD = {
    date: 'date',
    status: 'status',
    theme: 'theme'
};


export type TMessageHistoryControllerState = {
    sortField: TFIELD | string,
    isSortOrderDesc: boolean,
    dataUI: TMessageHistoryItem[],
    data: TMessageHistoryItem[]
}
