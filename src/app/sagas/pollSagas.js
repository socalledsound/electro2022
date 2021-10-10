import  { takeLatest, put, all, call, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga'
import { startFetchPollAnswers, startSubmitPollAnswer } from '../../features/poll/pollSlice'

function* submitPollAnswer(){
    //need to figure out the firebase side of this
}

function* fetchPollAnswers(){

}

function* onStartSubmitPollAnswer(){
    yield takeLatest(startSubmitPollAnswer.type, submitPollAnswer)
}

function* onStartFetchPollAnswers(){
    yield takeLatest(startFetchPollAnswers.type, fetchPollAnswers)
}

export function* pollSagas(){
    yield all(call([
        yield onStartSubmitPollAnswer(),
        yield onStartFetchPollAnswers(),
    ]))
}