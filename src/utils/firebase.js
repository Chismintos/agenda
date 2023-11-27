import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyADPCE5doRTQm-oHoYePT7FkzpnhxYYSPs",
    authDomain: "agenda-4592e.firebaseapp.com",
    projectId: "agenda-4592e",
    storageBucket: "agenda-4592e.appspot.com",
    messagingSenderId: "1052152666166",
    appId: "1:1052152666166:web:9ed13db7f07f6f4f5ba097"
};
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
//export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export default firebase.initializeApp(firebaseConfig);