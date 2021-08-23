import { call, all } from 'redux-saga/effects';
import { worksSagas } from './worksSagas';
import { userSagas } from './userSagas';

export default function* rootSaga(){
    yield all([
        call(worksSagas),
        call(userSagas),
    ])
}