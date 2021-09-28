import { all, call, put, takeLatest } from 'redux-saga/effects'
import { firestore, convertWorksSnapshotToMap, updateItemInFirestore, deleteItemInFirestore  } from '../../firebase/firebase.utils'
import { loginLoading } from '../../features/user/userSlice'
import { startFetchWorks, fetchWorksSuccess, 
    fetchWorksFailure, startUpdateGalleryItem, 
    updateGalleryItemFailure, updateGalleryItemSuccess, 
    startDeleteGalleryItem, deleteGalleryItemSuccess, deleteGalleryItemFailure,
    startUpdateFeatured, updateFeaturedSuccess, updateFeaturedFailure,
} from '../../features/gallery/gallerySlice'

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

function* updateGalleryItem(action){
    // yield console.log(action.payload)
    const { title, description, videoURL, linkURL, codeURL, selectedImage, ...rest } = action.payload
    // console.log(rest)
    const update = {
        title,
        description, 
        videoURL: videoURL || '', 
        linkURL: linkURL || '', 
        codeURL: codeURL || '', 
        imageURL: selectedImage
    }
    if(update){
        yield put(loginLoading(true))
        try{
            yield call(updateItemInFirestore, 'works', action.payload.id, update)
            yield put(updateGalleryItemSuccess({id: action.payload.id, update, rest}))
            yield put(loginLoading(false))
        }catch(error){
            console.error(error)
            yield put(updateGalleryItemFailure(error.message))
            yield put(loginLoading(false))
        }
    }
}

export function* deleteGalleryItem(action){
    // yield console.log(action.payload)
    const id = action.payload
    if(id){
        yield put(loginLoading(true))
        try{
            yield call(deleteItemInFirestore, 'works', id)
            yield put(deleteGalleryItemSuccess(id))
            yield put(loginLoading(false))
        
        }
        catch(error){
            console.log(error)
            yield put(deleteGalleryItemFailure(error.message))
            yield put(loginLoading(false))
        }
    }
}

export function* updateFeatured(action){
    const id = action.payload.id
    const update = {
        featured: action.payload.featured
    }
    if(id){
        yield put(loginLoading(true))
        try{
            yield call(updateItemInFirestore, 'works', action.payload.id, update)
            yield put(updateFeaturedSuccess(id))
            yield put(loginLoading(false))
        }catch(error){
            console.log(error)
            yield put(updateFeaturedFailure(error.message))
            yield put(loginLoading(false))
        }
    }
}


export function* onFetchWorksStart(){
    yield takeLatest(startFetchWorks.type, fetchWorks)
}

export function* onUpdateGalleryItemStart(){
    yield takeLatest(startUpdateGalleryItem.type, updateGalleryItem)
}

export function* onDeleteGalleryItemStart(){
    yield takeLatest(startDeleteGalleryItem.type, deleteGalleryItem)
}

export function* onUpdateFeaturedStart(){
    yield takeLatest( startUpdateFeatured.type, updateFeatured)
}

export function* gallerySagas(){
    yield all([call(onFetchWorksStart), call(onUpdateGalleryItemStart), call(onDeleteGalleryItemStart), call(onUpdateFeaturedStart)])
}