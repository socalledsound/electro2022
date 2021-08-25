import  { takeLatest, put, all, call } from 'redux-saga/effects';
import { firestore, convertUsersSnapshotToMap} from '../../firebase/firebase.utils';
import { loginLoading } from '../../features/user/userSlice'
import{ startFetchUsers, fetchUsersSuccess, fetchUsersFailure} from '../../features/people/peopleSlice'


function* fetchUsers(){

        yield put(loginLoading(true))
        try{
            const snap = yield firestore.collection('users').get()
            const users= yield convertUsersSnapshotToMap(snap)
            // yield console.log(works)
            yield put(fetchUsersSuccess(users))
            yield put(loginLoading(false))
        }
        catch(err){
            console.error(err)
            yield put(fetchUsersFailure(err))
            yield put(loginLoading(false))
        }
}


export function* onFetchUsersStart(){
    yield takeLatest(startFetchUsers.type, fetchUsers)
}

export function* peopleSagas() {
    yield all([call(onFetchUsersStart)])
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