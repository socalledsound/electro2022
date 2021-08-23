import { all, call, put, takeLatest } from 'redux-saga/effects'
import { uploadLoading } from '../../features/user/userSlice'
import { startSubmitCritMessage, submitCritMessageSuccess, submitCritMessageFailure } from '../../features/critMessages/critMessageSlice'
// import { addSubmissionToWorks } from '../../features/gallery/gallerySlice'
import { addItemToFirestore} from '../../firebase/firebase.utils'
import { createCritMessageSubmission } from '../../features/critMessages/critMessages.utils'

export function* fetchCritMessages(){
    
}

function* submitCritMessage(action){
   yield console.log(action.payload)
   const submission = yield(call(createCritMessageSubmission, action.payload));
   
    if(submission){
        yield put(uploadLoading(true))
        try{
            yield call(addItemToFirestore, 'works', submission)
            yield call(submitCritMessageSuccess)
            yield put(uploadLoading(false))
        } 
        catch(error){
            console.error(error)
            yield put(submitCritMessageFailure(error.message))
            yield put(uploadLoading(false))
        }
        
    }
}


export function* submitCritMessageStart(){
    console.log(startSubmitCritMessage.type)
    yield takeLatest(startSubmitCritMessage.type, submitCritMessage)
}

export function* submitWorkSagas(){
    yield all([call(submitCritMessageStart)])
}


