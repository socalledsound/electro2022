import { all, call, put, takeLatest } from 'redux-saga/effects'
import { firestore, convertWorksSnapshotToMap } from '../../firebase/firebase.utils'
import { loginLoading } from '../../features/user/userSlice'
import { startFetchWorks, fetchWorksSuccess, fetchWorksFailure } from '../../features/gallery/gallerySlice'



function* fetchWorks(){
    yield put(loginLoading(true))
    try{
        const snap = yield firestore.collection('works').get()
        const works = yield(convertWorksSnapshotToMap(snap))
        yield put(fetchWorksSuccess(works))
        yield put(loginLoading(false))
    }
    catch(err){
        yield put(fetchWorksFailure(err))
        yield put(loginLoading(false))
    }
   
}


export function* onFetchWorksStart(){
    yield takeLatest(startFetchWorks.type, fetchWorks)
}

export function* gallerySagas(){
    yield all([call(onFetchWorksStart)])
}