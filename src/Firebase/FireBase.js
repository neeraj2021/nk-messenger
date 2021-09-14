import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyACOP0VOWYCUX9ihtwdjiRNxdSq0F9gwU8",
  authDomain: "nk-messenger-2567a.firebaseapp.com",
  projectId: "nk-messenger-2567a",
  storageBucket: "nk-messenger-2567a.appspot.com",
  messagingSenderId: "505850474441",
  appId: "1:505850474441:web:0f9517622f5d5046910218",
});

const db = firebaseApp.firestore();
export default db;
