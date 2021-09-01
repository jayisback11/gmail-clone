import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjc5u2jJcjRFMX5zvRq-wXtajBEm2aV1o",
  authDomain: "fir-2b9a2.firebaseapp.com",
  projectId: "fir-2b9a2",
  storageBucket: "fir-2b9a2.appspot.com",
  messagingSenderId: "716320779841",
  appId: "1:716320779841:web:b5e5c87951cb8c3ee720c0",
  measurementId: "G-PLE5850B66",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
