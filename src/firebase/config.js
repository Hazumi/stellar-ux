import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwuAWCTDw-vbfIsTn0FabcuV8yv0fn5gM",
  authDomain: "stellar-ux.firebaseapp.com",
  projectId: "stellar-ux",
  storageBucket: "stellar-ux.appspot.com",
  messagingSenderId: "845997528153",
  appId: "1:845997528153:web:94f467d982c1a25e76cd48"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore
const db = firebase.firestore();

export { db };
