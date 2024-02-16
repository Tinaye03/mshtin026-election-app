// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMPcgx8wwY1KS24hjLldGuI0Y5jQOzXVA",
  authDomain: "mshtin026-election.firebaseapp.com",
  projectId: "mshtin026-election",
  storageBucket: "mshtin026-election.appspot.com",
  messagingSenderId: "763523863535",
  appId: "1:763523863535:web:eb7f2c7654d0f4bfe2dc1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export {auth, firestore};