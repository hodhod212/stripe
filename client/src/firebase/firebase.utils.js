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
//We look if there are no user, then do nothing, else bring our userRef and get snapShot,
// if there are no snapShot create it ,ofcourse we catch error
// then we retur userRef so we can use it if we need it
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
//provider give us access to new GoogleAuthProvider class from the authentication library
const provider = new firebase.auth.GoogleAuthProvider();
//We get google popup for authentication and signin
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
