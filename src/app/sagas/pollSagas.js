// import  { takeLatest, put, all, call, take } from 'redux-saga/effects';
// import { eventChannel } from 'redux-saga'
import  { takeLatest, put, all, call, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga'
import { firestore, addItemToFirestore, convertPollAnswersSnapshotToMap } from '../../firebase/firebase.utils';
import { startSyncPollAnswers, updatePollAnswers, syncPollAnswersFailure,
        startSubmitPollAnswer, submitPollAnswerSuccess, submitPollAnswerFailure } from '../../features/poll/pollSlice'
import { loginLoading } from '../../features/user/userSlice';


function* submitPollAnswer(action){
    const { currentUser, pollId, answerId } = action.payload
    const submission = {
            userId: currentUser.id,
            pollId,
            answerId
        }
    if(submission){
        yield put(loginLoading(true))
        try{
            //
            yield call(addItemToFirestore, 'polls', submission)
            yield call(submitPollAnswerSuccess)
            //  yield put(fetchCritMessagesStart(action.payload.workId))
            yield put(loginLoading(false))
        }catch(err){
            console.error(err)
            yield put(submitPollAnswerFailure(err.message))
            yield put(loginLoading(false))
        }
    }

}



function* syncPollAnswers () {
    const ref = firestore.collection('polls')
    const channel = eventChannel(emit => ref.onSnapshot(emit))
    console.error('here we are in syncing poll answers')
    try {
      while (true) {
        const data = yield take(channel)
        const pollAnswers = yield convertPollAnswersSnapshotToMap(data)
        console.error(pollAnswers)
        yield put(updatePollAnswers(pollAnswers))
      }
    } catch (err) {
      yield put(syncPollAnswersFailure(err))
    }
  }

function* onStartSubmitPollAnswer(){
    yield takeLatest(startSubmitPollAnswer.type, submitPollAnswer)
}

function* onStartSyncPollAnswers(){
    yield console.log('starting syncing poll answers')
    yield takeLatest(startSyncPollAnswers.type, syncPollAnswers)
}

export function* pollSagas(){
    
    yield all([
        call(onStartSubmitPollAnswer),
        call(onStartSyncPollAnswers),
    ])
}