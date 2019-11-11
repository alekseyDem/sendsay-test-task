import { api } from '../api/api.config';
import { call, put } from 'redux-saga/effects';
import { takeLatest, } from 'redux-saga/effects'
import { REQUEST } from '../actions/actions.utils';
import { MESSAGE_HISTORY_TYPES, messageHistoryAction } from '../actions/messageHistory.action';
import { MessageHistoryFixture } from '../components/messageHistory/messageHistoryController/MessageHistory.stories';

const getData = () => api.get(`/posts`);
export function* getHistory () {
    try {
        const response = yield call(getData)
        // simulate succes http-response
        yield put(messageHistoryAction.success({data: MessageHistoryFixture}))

    } catch (e) {
        yield put(messageHistoryAction.failure(e))
    }
}
export function* actionWatcherMessageHistory() {
    // @ts-ignore
    yield takeLatest(MESSAGE_HISTORY_TYPES[REQUEST], getHistory)
}
