export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const INITIAL = 'INITIAL';
export const SET = 'SET';
export const SET_BULK = 'SET_BULK';
export const DELETE = 'DELETE';
export const DELETE_BULK = 'DELETE_BULK';

export type TAsync_REQUEST_TYPE = {
    REQUEST: string,
    SUCCESS: string,
    FAILURE: string,
    INITIAL: string
}

export type TSync_REQUEST_TYPE = {
    SET: string,
    DELETE: string,
    DELETE_BULK: string,
    SET_BULK: string
}

export function createAsyncRequestTypes(base: string): TAsync_REQUEST_TYPE {
    return {
        REQUEST: `${base}_${REQUEST}`,
        SUCCESS: `${base}_${SUCCESS}`,
        FAILURE: `${base}_${FAILURE}`,
        INITIAL: `${base}_${INITIAL}`,
    }
}

export function createSyncRequestTypes(base: string): TSync_REQUEST_TYPE {
    return {
        SET: `${base}_${SET}`,
        DELETE: `${base}_${DELETE}`,
        SET_BULK: `${base}_${SET_BULK}`,
        DELETE_BULK: `${base}_${DELETE_BULK}`,
    }
}

export type TPayload = {type: string}

export type TAction<T> = {
    type: string,
    payload: T
}

export type TActionEmpty = {
    type: string
}

export function action<T>(type: string, payload: T): TAction<T>  {
    return {type, payload}
}
export function actionWithoutPayload(type: string): TActionEmpty {
    return {type}
}

export function resetToInitialAction(type: string): TPayload  {
    return {type}
}
