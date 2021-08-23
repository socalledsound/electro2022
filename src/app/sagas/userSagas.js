import  { takeLatest, put, all, call } from 'redux-saga/effects';
import  UserActionTypes from './UserActionTypes';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { emailSignInSuccess, emailSignInFailure, emailRegisterSuccess, emailRegisterFailure } from '../../features/user/userSlice'


function* registerWithEmail(action){
    console.log('registering with email')
    const { displayName, email, password } = action.payload
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        const userRef = yield(call(createUserProfileDocument, user, {displayName}));
        const userSnapshot = yield userRef.get();
        yield put(
            emailRegisterSuccess({id: userSnapshot.id, ...userSnapshot.data})
        )
    }
    catch(error){
        console.log(error);
        yield put(
            emailRegisterFailure(error)
        )
    }
}



function* signInWithEmail(action){
    console.log('signing in with email')
    const { email, password } = action.payload
    // yield console.log(email, password)
    try {
        // const userRef = yield auth.signInWithPopup(googleProvider);
        // console.log(userRef);
        const { user } = yield auth.signInWithEmailAndPassword(email, password);;
        const userRef = yield(call(createUserProfileDocument, user));
        const userSnapshot = yield userRef.get();
        yield put(
            emailSignInSuccess({id: userSnapshot.id, ...userSnapshot.data})
        )
    } catch(error){
        console.log(error);
        yield put(
            emailSignInFailure(error.message)
        )
    }
}

export function* onEmailSignInStart(){
    console.log('hi from signin')
    yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail)
}

export function* onEmailRegisterStart(){
    console.log('hi from register')
    yield takeLatest(UserActionTypes.EMAIL_REGISTER_START, registerWithEmail)
}

export function* userSagas() {
    yield all([call(onEmailSignInStart), call(onEmailRegisterStart)])
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