import firebase from 'firebase';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZ5Cx_Yc7-ANopaqc7stEswXoLTOpAKV0",
  authDomain: "auth-73550.firebaseapp.com",
  projectId: "auth-73550",
  storageBucket: "auth-73550.appspot.com",
  messagingSenderId: "6761378849",
  appId: "1:6761378849:web:bbdd9f15bbdc5f6b831f60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {auth};
export default db;