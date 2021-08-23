import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import firebaseConfig from './FIREBASE_CONFIG';
import md5 from 'md5';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    // console.log(userAuth, 'in firebase');
    if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                photoURL: `http://gravatar.com/avatar/${md5(email)}?d=identicon`,
                ...additionalData
            })
        } catch(error) {
            console.log(error.message);
        }
    }
    return userRef
}




export default firebase;
