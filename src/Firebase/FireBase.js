import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBkVdtyQkr6nIj9cCi9vKvGxZL8qzQQ6n4",
  authDomain: "postdata-b31f3.firebaseapp.com",
  databaseURL: "https://postdata-b31f3-default-rtdb.firebaseio.com",
  projectId: "postdata-b31f3",
  storageBucket: "postdata-b31f3.appspot.com",
  messagingSenderId: "648323993769",
  appId: "1:648323993769:web:b534b8756fa532ba8459b8",
});

const db = firebaseApp.firestore();
export default db;
