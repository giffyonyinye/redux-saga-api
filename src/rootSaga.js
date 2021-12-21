import { all } from 'redux-saga/effects';
import actionWatcher from './Saga/mySaga';

export function* rootSaga() {
    yield all(
        [
            actionWatcher()
        ]
    );
}