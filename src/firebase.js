import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv6wUKCTuXrJE-C77rzBdIdMXgFWqpejs",
  authDomain: "clone-6d9cd.firebaseapp.com",
  databaseURL: "https://clone-6d9cd.firebaseio.com",
  projectId: "clone-6d9cd",
  storageBucket: "clone-6d9cd.appspot.com",
  messagingSenderId: "161943591706",
  appId: "1:161943591706:web:6fe8357b0db2fc45192aa3",
  measurementId: "G-11PTTK5V36"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
