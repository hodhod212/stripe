import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyD32ZkAIZur8-QV4dLeWp8MZsdU-_3ajuw",
  authDomain: "stripe-212.firebaseapp.com",
  databaseURL: "https://stripe-212.firebaseio.com",
  projectId: "stripe-212",
  storageBucket: "stripe-212.appspot.com",
  messagingSenderId: "260090783673",
  appId: "1:260090783673:web:f74b7b2a80688aa9fdf868",
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
//provider give us access to new GoogleAuthProvider class from the authentication library
const provider = new firebase.auth.GoogleAuthProvider();
//We get google popup for authentication and signin
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
