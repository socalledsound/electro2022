import { call, all } from 'redux-saga/effects';
import { submitWorkSagas } from './submitWorkSagas';
import { userSagas } from './userSagas';

export default function* rootSaga(){
    yield all([
        call(submitWorkSagas),
        call(userSagas),
    ])
}