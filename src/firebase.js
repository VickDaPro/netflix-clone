import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7qBf9HYwZ4gVZwueDmtttH7o5OMG2rvQ",
  authDomain: "netflix-clone-80153.firebaseapp.com",
  projectId: "netflix-clone-80153",
  storageBucket: "netflix-clone-80153.appspot.com",
  messagingSenderId: "726849165334",
  appId: "1:726849165334:web:3b51118b5219ce69963d37",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
