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
        // console.log(userAuth, additionalData)
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
                avatar: `http://gravatar.com/avatar/${md5(email)}?d=identicon`,
                ...additionalData
            })
        } catch(error) {
            console.log(error.message);
        }
    }
    return userRef
}

export const addItemToFirestore = async(collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    // console.log(objectToAdd, 'in firestore');
    // console.log("collectionref:", collectionRef);
    
    await collectionRef.add(objectToAdd)
    return
}

export const updateItemInFirestore = async(collectionKey, itemToUpdate, update) => {
    // console.log(update)
    const collectionRef = firestore.collection(collectionKey)
    await collectionRef.doc(itemToUpdate).update(update)
}

export const deleteItemInFirestore  = async(collectionKey, itemToDelete) => {
    const collectionRef = firestore.collection(collectionKey)
    await collectionRef.doc(itemToDelete).delete()
}


export const convertUsersSnapshotToMap = (users) => {
    // console.log(users)
    const transformedUsers = users.docs.map(doc => {
        const { avatar, displayName, email } = doc.data();
        return {
            
            id: doc.id,
            avatar, 
            displayName,
            email,
            
        }
    })
    
    return transformedUsers
}

export const convertWorksSnapshotToMap = (works) => {
    
    const transformedArray = works.docs.map(doc => {
        const { assignment, description, featured, random, imageURL, linkURL, codeURL, title, user, timestamp  } = doc.data();

        return {
            
            id: doc.id,
            assignment,
            description, 
            featured,
            random,
            imageURL,
            linkURL,
            codeURL,
            title,
            user,
            timestamp,
        }
    })
    return transformedArray
}

export const convertMessagesSnapshotToMap = (snap) => {
    
    const messages = snap.docs.map(doc => {
        const { user, workId, message, timestamp} = doc.data()
        // console.log(doc.data())
        // console.log(timestamp, user, workId, message)
        return {
            id: doc.id,
            user,
            workId, 
            message,
            timestamp: timestamp,
        }
    })
    return messages
}

export default firebase;





// export const updateFirestoreUserInfo = async (data) => {
//     console.log(data)
//     const { currentUser, displayName, selectedImage } = data
//     firestore.collection('users').doc(currentUser.id).update({
//         id: currentUser.id,
//         email: currentUser.email,
//         avatar: selectedImage,
//         displayName,
//     })
//     .then(() => {
//         return ({

//         })
//     })
//     .catch((err)=>{
//         console.error('error writing document')
//     })
//     // const collectionRef= 'users'

// }



