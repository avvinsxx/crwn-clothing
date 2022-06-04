import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import {initializeApp} from "firebase/app";


// const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

const config = {
    apiKey: "AIzaSyCDpzwhQIjwk1PUwTzgBkaRwf2MJ2C5IGc",
    authDomain: "crwn-db-6871f.firebaseapp.com",
    projectId: "crwn-db-6871f",
    storageBucket: "crwn-db-6871f.appspot.com",
    messagingSenderId: "322111416135",
    appId: "1:322111416135:web:012cfc2360938afcdcce62"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
// export const auth = getAuth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;
