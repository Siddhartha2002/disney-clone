import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPI6UaOpzh_bWkuEjvfRY7-sJaJMUBGFk",
  authDomain: "disney-clone-fd9fe.firebaseapp.com",
  projectId: "disney-clone-fd9fe",
  storageBucket: "disney-clone-fd9fe.appspot.com",
  messagingSenderId: "704995226274",
  appId: "1:704995226274:web:93d60d5656919bb5de1dfb",
  measurementId: "G-CSJ1WGY17G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;