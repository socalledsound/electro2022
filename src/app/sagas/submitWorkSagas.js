import { all, call, put, takeLatest } from 'redux-saga/effects'
import { SubmitWorkTypes } from './SubmitWorkTypes'
import { loginLoading } from '../../features/user/userSlice'
import { submitWorkFailure } from '../../features/submitWork/submitWorkSlice'
import { addSubmissionToWorks } from '../../features/gallery/gallerySlice'
import { addItemToFirestore} from '../../firebase/firebase.utils'
import { createSubmission } from '../../features/submitWork/submit.utils'

export function* submitWorkSuccess(data){
    yield console.log(data)
    yield put(addSubmissionToWorks(data))
}

function* submitWork(action){
   yield console.log(action.payload)
   const submission = yield(call(createSubmission, action.payload));
   
    if(submission){
        yield put(loginLoading(true))
        try{
            yield call(addItemToFirestore, 'works', submission)
            // yield console.log(thing.data())
            yield call(submitWorkSuccess, submission)
            yield put(loginLoading(false))
        } 
        catch(error){
            console.error(error)
            yield put(submitWorkFailure(error.message))
            yield put(loginLoading(false))
        }
        
    }
}


export function* submitWorkStart(){
    console.log('sbumit work start')
    yield takeLatest(SubmitWorkTypes.SUBMIT_WORK_START, submitWork)
}

export function* submitWorkSagas(){
    yield all([call(submitWorkStart)])
}


