import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBRVSKkPRq8VjELR6TZxmWkDw9kBIRcSaU",
    authDomain: "crwn-clothing-db-82ce1.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-82ce1.firebaseio.com",
    projectId: "crwn-clothing-db-82ce1",
    storageBucket: "crwn-clothing-db-82ce1.appspot.com",
    messagingSenderId: "255519042129",
    appId: "1:255519042129:web:e689aca64cf70d6da3a670",
    measurementId: "G-PHM2MT2SYK",
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
