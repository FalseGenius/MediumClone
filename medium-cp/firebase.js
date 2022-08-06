// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASSud_dVzikrY0-2ZHDOXFmYqYXeeRek0",
  authDomain: "medium-clone-c095d.firebaseapp.com",
  projectId: "medium-clone-c095d",
  storageBucket: "medium-clone-c095d.appspot.com",
  messagingSenderId: "684980264233",
  appId: "1:684980264233:web:46620b8102ae4ff749eb38",
  measurementId: "G-BX3F9QCQRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {db, auth, provider};