import  { takeLatest, put, all, call } from 'redux-saga/effects';
import  UserActionTypes from './UserActionTypes';
import { auth, createUserProfileDocument, firestore, convertWorksSnapshotToMap } from '../../firebase/firebase.utils';
import { emailSignInSuccess, emailSignInFailure, loginLoading, 
         submitUserUpdateStart, updateUserSuccess, updateUserFailure } from '../../features/user/userSlice'
import{ startFetchUserWorks, fetchUserWorksSuccess, fetchUserWorksFailure} from '../../features/gallery/gallerySlice'


function* fetchUserWorks(action){
    // yield console.log(action.payload)
    
    if(action.payload){
        const { id } = action.payload
        try{
            const snap = yield firestore.collection('works').where(`user.id`, '==',  id).get()
            const works = yield convertWorksSnapshotToMap(snap)
            // yield console.log(works)
            yield put(fetchUserWorksSuccess(works))
        }
        catch(err){
            console.error(err)
            yield put(fetchUserWorksFailure(err))
        }
    }

}


function* updateUser(action){
    const { currentUser, displayName, selectedImage } = action.payload
    const image = selectedImage ? selectedImage : currentUser.avatar
    yield put(loginLoading(true))
    try{
        
        yield firestore.collection('users').doc(currentUser.id).update({
            id: currentUser.id,
            email: currentUser.email,
            avatar: image,
            displayName,
        })
        const user = {
            id: currentUser.id,
            email: currentUser.email,
            avatar: selectedImage,
            displayName,
        }
        yield put(updateUserSuccess(user))
        yield put(loginLoading(false))
    }catch(err){
        console.error(err)
        yield put(loginLoading(false))
        yield put(updateUserFailure(err))
    }
    
    
}


function* signInWithEmail(action){
    // console.log('registering with email')
    const { email, password } = action.payload
    yield put(loginLoading(true))
    try{
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield(call(createUserProfileDocument, user));
        const userSnapshot = yield userRef.get();
        yield put(
            emailSignInSuccess({id: userSnapshot.id, 
                                  displayName: userSnapshot.data().displayName,
                                    avatar: userSnapshot.data().avatar,
                                    email:  userSnapshot.data().email,
                                })
        )
        yield put(loginLoading(false))
    }
    catch(error){
        console.log(error);
        yield put(
            emailSignInFailure(error.message)            
        )
        yield put(loginLoading(false))   

    }
}

function* registerWithEmail(action){
    // console.log('registering with email')
    const { displayName, email, password } = action.payload
    yield put(loginLoading(true))
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        const userRef = yield(call(createUserProfileDocument, user, { displayName }));
        const userSnapshot = yield userRef.get();
        yield put(
            emailSignInSuccess({id: userSnapshot.id, 
                                  displayName: userSnapshot.data().displayName,
                                    avatar: userSnapshot.data().avatar,
                                    email:  userSnapshot.data().email,
                                })
        )
        yield put(loginLoading(false)) 
    }
    catch(error){
        console.log(error);
        yield put(
            emailSignInFailure(error.message)
        )
        yield put(loginLoading(false)) 
    }
}

export function* onEmailRegisterStart(){
    // console.log('hi from register')
    yield takeLatest(UserActionTypes.EMAIL_REGISTER_START, registerWithEmail)
}

export function* onEmailSignInStart(){
    // console.log('hi from sign in')
    yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail)
}

export function* onUserUpdateStart(){
    yield takeLatest(submitUserUpdateStart.type, updateUser)
}

export function* onFetchUserWorksStart(){
    yield takeLatest(startFetchUserWorks.type, fetchUserWorks)
}

export function* userSagas() {
    yield all([call(onEmailSignInStart),call(onEmailRegisterStart), call(onUserUpdateStart), call(onFetchUserWorksStart)])
}




//     handleSubmit = async e => {
//         e.preventDefault();
//         const { displayName, email, password } = this.state;
//         if(this.isFormValid()){
//             this.setState({ errors: [], loading: true });

//             try {
//             const { user } = await auth.createUserWithEmailAndPassword(email, password);
//             await createUserProfileDocument(user, {displayName});
//             this.setState({
//                     displayName: '',
//                     email: '',
//                     password: '',
//                     passwordConfirmation: '',
//                     loading: false,
//                 })
//             }
//             catch (error) {
//                 // alert(error);
//                 this.setState({errors: this.state.errors.concat(error), loading: false })
//             }
//         }
//     }