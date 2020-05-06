import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'crwn-clothing-db-82ce1.firebaseapp.com',
    databaseURL: 'https://crwn-clothing-db-82ce1.firebaseio.com',
    projectId: 'crwn-clothing-db-82ce1',
    storageBucket: 'crwn-clothing-db-82ce1.appspot.com',
    messagingSenderId: '255519042129',
    appId: '1:255519042129:web:e689aca64cf70d6da3a670',
    measurementId: 'G-PHM2MT2SYK',
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (err) {
            console.error('Error creating user', err.message);
        }
    }

    return userRef;
};
export default firebase;
