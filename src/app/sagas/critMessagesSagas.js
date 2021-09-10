import { all, call, put, takeLatest } from 'redux-saga/effects'
import { firestore, convertMessagesSnapshotToMap } from '../../firebase/firebase.utils'
import { loginLoading } from '../../features/user/userSlice'
import { startUpdateCritMessage, startDeleteCritMessage, startSubmitCritMessage, submitCritMessageSuccess, submitCritMessageFailure,
    fetchCritMessagesStart, fetchCritMessagesSuccess, fetchCritMessagesFailure,
} from '../../features/critMessages/critMessagesSlice'
// import { addSubmissionToWorks } from '../../features/gallery/gallerySlice'
import { addItemToFirestore} from '../../firebase/firebase.utils'
import { createCritMessageSubmission } from '../../features/critMessages/critMessages.utils'

export function* fetchCritMessages(action){
    console.log(action)
    const  workId = action.payload
    // console.log(workId)
    yield put(loginLoading(true))
    try{
        const snap = yield firestore.collection('critMessages').where(`workId`, '==', workId).get()
        const messages = yield(convertMessagesSnapshotToMap(snap))
        yield put(fetchCritMessagesSuccess(messages))
        
        yield put(loginLoading(false))
    }catch(err){
        yield put(fetchCritMessagesFailure(err))
        yield put(loginLoading(false))
    }
}

function* submitCritMessage(action){
   yield console.log('SUBMIT CRIT MESSAGE', action.payload)
   const submission = yield(call(createCritMessageSubmission, action.payload));
   
    if(submission){
        yield put(loginLoading(true))
        try{
            yield call(addItemToFirestore, 'critMessages', submission)
            yield call(submitCritMessageSuccess)
             yield put(fetchCritMessagesStart(action.payload.workId))
            yield put(loginLoading(false))
        } 
        catch(error){
            console.error(error)
            yield put(submitCritMessageFailure(error.message))
            yield put(loginLoading(false))
        }
        
    }
}

function* updateCritMessage(action){
    yield console.log('updating crit message', action.payload)
}

function* deleteCritMessage(action){
    yield console.log('deleting crit message', action.payload)
}


export function* onFetchCritMessagesStart(){
    yield takeLatest(fetchCritMessagesStart.type, fetchCritMessages)
}

export function* onSubmitCritMessageStart(){
    // console.log(startSubmitCritMessage.type)
    yield takeLatest(startSubmitCritMessage.type, submitCritMessage)
}

export function* onUpdateCritMessageStart(){
    yield takeLatest(startUpdateCritMessage.type, updateCritMessage)
}

export function* onDeleteCritMessageStart(){
    yield takeLatest(startDeleteCritMessage.type, deleteCritMessage)
}

export function* critMessageSagas(){
    yield all([call(onSubmitCritMessageStart), call(onFetchCritMessagesStart), call(onUpdateCritMessageStart), call(onDeleteCritMessageStart)])
}


