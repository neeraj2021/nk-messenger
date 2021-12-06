import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD6Djfh3XAKhI4I0QejUL2EdsJ349edOik",
  authDomain: "nk-mess.firebaseapp.com",
  projectId: "nk-mess",
  storageBucket: "nk-mess.appspot.com",
  messagingSenderId: "300288138313",
  appId: "1:300288138313:web:fd5c737bcc07871be7b398",
});

const db = firebaseApp.firestore();
export default db;
