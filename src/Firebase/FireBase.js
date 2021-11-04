import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBHD2yFA_bpQw_hiZPQs-TiyxuU6uRwJ8A",
  authDomain: "nk-messenger-15fcf.firebaseapp.com",
  projectId: "nk-messenger-15fcf",
  storageBucket: "nk-messenger-15fcf.appspot.com",
  messagingSenderId: "1009323274261",
  appId: "1:1009323274261:web:c98314cd4812e63b645e1c",
});

const db = firebaseApp.firestore();
export default db;
