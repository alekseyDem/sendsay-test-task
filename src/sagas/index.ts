import { fork, all } from '@redux-saga/core/effects';
import { actionWatcherMessageSender } from './messageSender.saga';
import { actionWatcherMessageHistory } from './messageHistory.saga';

export function* rootSaga() {
    yield all([
        fork(actionWatcherMessageSender),
        fork(actionWatcherMessageHistory)
    ])
}
