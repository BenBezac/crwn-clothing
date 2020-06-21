import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { AdditionalData, Configuration } from './type';

const config: Configuration = {
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

const provider: firebase.auth.GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth: firebase.auth.Auth = firebase.auth();
export const fs: firebase.firestore.Firestore = firebase.firestore();
export const signInWithGoogle: Function = () => auth.signInWithPopup(provider);
export const createUserProfileDocument: (
    userAuth: firebase.User,
    additionalData?: AdditionalData
) => Promise<
    firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
> = async (userAuth: firebase.User, additionalData?: AdditionalData) => {
    if (!userAuth) throw new Error('userAuth is undefined');

    const userRef: firebase.firestore.DocumentReference = fs.doc(
        `users/${userAuth.uid}`
    );
    const snapshot: firebase.firestore.DocumentData = await userRef.get();

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
