import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyC74EbnRpDhZ68vijD_a9RRW4wcGSaPR2A",
  authDomain: "todoauth-9329f.firebaseapp.com",
  projectId: "todoauth-9329f",
  storageBucket: "todoauth-9329f.appspot.com",
  messagingSenderId: "280970739609",
  appId: "1:280970739609:web:5e1a580c4e9a170f75dd08",
});

export default firebaseConfig;
