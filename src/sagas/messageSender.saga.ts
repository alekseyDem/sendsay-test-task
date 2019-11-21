import { api } from '../api/api.config';
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects'
import { REQUEST, TAction } from '../actions/actions.utils';
import { MESSAGE_FORM_TYPES, messageSenderAction, TMessageSenderRequest } from '../actions/messageSender.action';
import { MessageHistoryFixture } from '../components/messageHistory/messageHistoryController/MessageHistory.stories';
import { messageHistoryAction } from '../actions/messageHistory.action';

const postData = (request: any) => api.post(`/posts`);
export function* postMessage (params: TAction<TMessageSenderRequest>) {
    const {request} = params.payload;
    try {
        // simulate HTTP-request,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = yield call(postData, request);
        // add toFixture element
        // simulate HTTP-response,
        yield put(messageSenderAction.success({'track.id': 1}))

        // Simulate request for retrieving updated data
        MessageHistoryFixture.push({theme: request.letter.subject, status: 0, date: '11.10.19', id: Math.floor(Math.random() * 1000)});
        yield put(messageHistoryAction.request())
    } catch (e) {
        yield put(messageSenderAction.failure(e))
    }
}
export function* actionWatcherMessageSender() {
    yield takeLatest(MESSAGE_FORM_TYPES[REQUEST], postMessage);
}
