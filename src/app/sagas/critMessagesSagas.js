import { all, call, put, takeLatest } from 'redux-saga/effects'
// import { selectCurrentUser } from '../../features/user/userSlice'
import { firestore, convertMessagesSnapshotToMap } from '../../firebase/firebase.utils'
import { loginLoading } from '../../features/user/userSlice'
import { startUpdateCritMessage, startDeleteCritMessage, startSubmitCritMessage, submitCritMessageSuccess, submitCritMessageFailure,
    fetchCritMessagesStart, fetchCritMessagesSuccess, fetchCritMessagesFailure, 
    deleteCritMessageSuccess, deleteCritMessageFailure, updateCritMessageSuccess, updateCritMessageFailure, fetchUserCritMessagesStart,
} from '../../features/critMessages/critMessagesSlice'
// import { addSubmissionToWorks } from '../../features/gallery/gallerySlice'
import { addItemToFirestore, updateItemInFirestore, deleteItemInFirestore} from '../../firebase/firebase.utils'
import { createCritMessageSubmission } from '../../features/critMessages/critMessages.utils'

export function* fetchCritMessages(action){
    // console.log(action)
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

export function* fetchUserCritMessages(action){
    const currentUser = action.payload
    if(currentUser){
        const userId = action.payload.id
        // yield console.log(userId, 'fetching crit messages')
        if(userId){
            yield put(loginLoading(true))
            try{
                const snap = yield firestore.collection('critMessages').where(`user`, '==', userId).get()
                const messages = yield(convertMessagesSnapshotToMap(snap))
                yield put(fetchCritMessagesSuccess(messages))
                yield put(loginLoading(false))
            }
            catch(err){
                yield put(fetchCritMessagesFailure(err))
                yield put(loginLoading(false))
            }
        }
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
   const update = {message: action.payload.message}
    if(update){
        yield put(loginLoading(true))
        try{
            yield call(updateItemInFirestore, 'critMessages', action.payload.itemId, update)
            yield put(updateCritMessageSuccess({id: action.payload.itemId, update}))
            //  yield put(fetchCritMessagesStart(action.payload.workId))
            yield put(loginLoading(false))
        } 
        catch(error){
            console.error(error)
            yield put(updateCritMessageFailure(error.message))
            yield put(loginLoading(false))
        }
        
    }
}

function* deleteCritMessage(action){
    yield console.log('deleting crit message', action.payload)
    const itemId = action.payload
    if(itemId){
        yield put(loginLoading(true))
        try{
            yield call(deleteItemInFirestore, 'critMessages', itemId)
            yield put(deleteCritMessageSuccess(itemId))  
            console.log('before login loading reset')
            yield put(loginLoading(false))
        } 
        catch(error){
            console.error(error)
            yield put(deleteCritMessageFailure(error.message))
            yield put(loginLoading(false))
        }
        
    }

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

export function* onFetchUserCritMessagesStart(){
    yield takeLatest(fetchUserCritMessagesStart.type, fetchUserCritMessages)
}

export function* critMessageSagas(){
    yield all(
        [
            call(onSubmitCritMessageStart), 
            call(onFetchCritMessagesStart), 
            call(onUpdateCritMessageStart), 
            call(onDeleteCritMessageStart),
            call(onFetchUserCritMessagesStart)
        ])
}


