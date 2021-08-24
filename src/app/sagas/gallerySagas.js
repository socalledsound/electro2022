import { all, call, put, takeLatest } from 'redux-saga/effects'
import { firestore } from '../../firebase/firebase.utils'
import { startFetchWorks, fetchWorksSuccess, fetchWorksFailure } from '../../features/gallery/gallerySlice'



function* fetchWorks(){

    try{
        const works = yield firestore.collection('works')

        yield put(fetchWorksSuccess(works))
    }
    catch(err){
        yield put(fetchWorksFailure())
    }
   
}


export function* onFetchWorksStart(){
    yield takeLatest(startFetchWorks.type, fetchWorks)
}

export function* gallerySagas(){
    yield all([call(onFetchWorksStart)])
}