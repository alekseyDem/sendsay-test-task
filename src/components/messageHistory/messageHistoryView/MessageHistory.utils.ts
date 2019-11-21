import { statusClassNameError, statusClassNameInProgress, statusClassNameSuccess } from './MessageHistory.config';
import { TMessageHistoryItem } from '../messageHistoryController/MessageHistory.model';

export const getMessageClassName = (status: number): string => {
    if (status === -1) {
        return statusClassNameSuccess
    } else if (status > -1) {
        return statusClassNameInProgress
    } else {
        return statusClassNameError
    }
};

export const getMessageStatus = (status: number): string => {
    if (status === -1) {
        return 'Отправлено'
    } else if (status > -1) {
        return 'В очереди'
    } else {
        return 'Ошибка'
    }
};


export const isHistoryItemSelected = (selectedHistoryItems: TMessageHistoryItem[], historyItemId: number): boolean => {
    return selectedHistoryItems.some(historyItem => historyItem.id === historyItemId)
};

export const isAllHistoryItemsSelected = (selectedHistoryItems: TMessageHistoryItem[], historyItems: TMessageHistoryItem[]): boolean => {
    return selectedHistoryItems.length === historyItems.length
};
