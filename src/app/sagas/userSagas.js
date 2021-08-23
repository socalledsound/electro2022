import  { takeLatest, put, all, call } from 'redux-saga/effects';
import  UserActionTypes from './UserActionTypes';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { emailSignInSuccess, emailSignInFailure, loginLoading} from '../../features/user/userSlice'


function* signInWithEmail(action){
    console.log('registering with email')
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
    console.log('registering with email')
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
    console.log('hi from register')
    yield takeLatest(UserActionTypes.EMAIL_REGISTER_START, registerWithEmail)
}

export function* onEmailSignInStart(){
    console.log('hi from sign in')
    yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail)
}


export function* userSagas() {
    yield all([call(onEmailSignInStart),call(onEmailRegisterStart)])
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