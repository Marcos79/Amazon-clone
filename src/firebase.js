// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAA6mgBZ0I5V6el8Mwr8QBridgAsjI3wps",
  authDomain: "clone-f3706.firebaseapp.com",
  projectId: "clone-f3706",
  storageBucket: "clone-f3706.appspot.com",
  messagingSenderId: "1022849688695",
  appId: "1:1022849688695:web:464632099c05f0da2f5272",
  measurementId: "G-LS5GEC3FYC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};