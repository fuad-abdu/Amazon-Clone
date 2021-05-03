import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_AdCUrPUOmkPLtxIyuqY9i-DePUV8JEk",
  authDomain: "clone-9b4a8.firebaseapp.com",
  projectId: "clone-9b4a8",
  storageBucket: "clone-9b4a8.appspot.com",
  messagingSenderId: "553998374925",
  appId: "1:553998374925:web:8eea230c3c66dd31e91d44",
  measurementId: "G-M5REJRT3C7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};