import { api } from '../api/api.config';
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects'
import { REQUEST, TAction } from '../actions/actions.utils';
import { MESSAGE_FORM_TYPES, messageSenderAction, TMessageSenderRequest } from '../actions/messageSender.action';
import { MessageHistoryFixture } from '../components/messageHistory/messageHistoryController/MessageHistory.stories';
import { MESSAGE_HISTORY_TYPES, messageHistoryAction } from '../actions/messageHistory.action';
import { getHistory } from './messageHistory.saga';

const postData = (request: any) => api.post(`/posts`);
export function* postMessage (params: TAction<TMessageSenderRequest>) {
    const {request} = params.payload
    try {
        // simulate HTTP-request,
        const response = yield call(postData, request);
        // add toFixture element

        // simulate HTTP-response,
        yield put(messageSenderAction.success({'track.id': 1}))
        //
        // const asd = yield call(postData, request)
        // MessageHistoryFixture.push({theme: request.letter.subject, status: 0, date: '11.10.19'})
        // yield put(messageHistoryAction.success({data: MessageHistoryFixture}))
        // const ne = new Error('EBAT')
        // yield put(messageSenderAction.failure(ne))
    } catch (e) {
        console.log('messageSenderAction.failure ', e)
        yield put(messageSenderAction.failure(e))
    }
}
export function* actionWatcherMessageSender() {
    // @ts-ignore
    yield takeLatest(MESSAGE_FORM_TYPES[REQUEST], postMessage);
    yield takeLatest(MESSAGE_HISTORY_TYPES[REQUEST], getHistory)
}
