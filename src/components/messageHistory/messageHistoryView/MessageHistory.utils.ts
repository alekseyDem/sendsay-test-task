import { statusClassNameError, statusClassNameInProgress, statusClassNameSuccess } from './MessageHistory.config';

export const getMessageClassName = (status: number): string => {
    if (status === -1) {
        return statusClassNameSuccess
    } else if (status > -1) {
        return statusClassNameInProgress
    } else {
        return statusClassNameError
    }
}

export const getMessageStatus = (status: number): string => {
    if (status === -1) {
        return 'Отправлено'
    } else if (status > -1) {
        return 'В очереди'
    } else {
        return 'Ошибка'
    }
}
