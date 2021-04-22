import firebase from 'firebase';

const FirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDw1ZmeFabmO9gnBNtLpASw7QKsyXKe6FQ",
  authDomain: "cargo-delivery-4f4e5.firebaseapp.com",
  projectId: "cargo-delivery-4f4e5",
  storageBucket: "cargo-delivery-4f4e5.appspot.com",
  messagingSenderId: "256212066878",
  appId: "1:256212066878:web:6c4cd55427e9661b18a76f",
  measurementId: "G-VLXL4YX63T"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
