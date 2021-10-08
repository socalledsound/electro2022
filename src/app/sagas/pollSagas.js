import  { takeLatest, put, all, call, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga'


function* onSubmitPollAnswer(){
    
}

export function* pollSagas(){
    yield all(call([
        yield onSubmitPollAnswer()
    ]))
}