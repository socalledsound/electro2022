import { call, all } from 'redux-saga/effects';
import { submitWorkSagas } from './submitWorkSagas';
import { userSagas } from './userSagas';
import { gallerySagas } from './gallerySagas'
import { peopleSagas } from './peopleSagas'
import { critMessageSagas} from './critMessagesSagas'
import { pollSagas } from './pollSagas'

export default function* rootSaga(){
    yield all([
        call(submitWorkSagas),
        call(userSagas),
        call(gallerySagas),
        call(peopleSagas),
        call(critMessageSagas),
        call(pollSagas),
    ])
}