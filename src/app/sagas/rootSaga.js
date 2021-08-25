import { call, all } from 'redux-saga/effects';
import { submitWorkSagas } from './submitWorkSagas';
import { userSagas } from './userSagas';
import { gallerySagas } from './gallerySagas'
import { peopleSagas } from './peopleSagas'
export default function* rootSaga(){
    yield all([
        call(submitWorkSagas),
        call(userSagas),
        call(gallerySagas),
        call(peopleSagas),
    ])
}