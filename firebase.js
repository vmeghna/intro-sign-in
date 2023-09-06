// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from " https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js ";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjRuVCMhoyPNG7YUoTwbvGlMsrD7yQEcA",
  authDomain: "fir-auth-5b10d.firebaseapp.com",
  projectId: "fir-auth-5b10d",
  storageBucket: "fir-auth-5b10d.appspot.com",
  messagingSenderId: "448757202381",
  appId: "1:448757202381:web:b61f34162a183002be5884",
};
//never disturb above one//
// Initialize Firebase
const jsApp = initializeApp(firebaseConfig);

//authentication//
const jsAuth = getAuth(jsApp);

const jsGoogleAuthProvider = new GoogleAuthProvider();

//create a authentication method function for google provider//
const signInWithPopupGoogleProvider = async () =>
  await signInWithPopup(jsAuth, jsGoogleAuthProvider);

//create authentication method function for  email/password provider//
//create a method function for userCreation using email and password
const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(jsAuth, email, password);
};

//create a method function for signInWithEmail and Password
// const signInAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;
//   return signInWithEmailAndPassword(commerceAuth, email, password);
// };

// Initialize cloud firestore and get reference to the service//
const jsDb = getFirestore(jsApp);

//create user document
const createUserDocumentFromAuth = async (
  userAuth,
  additionInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(jsDb, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);

  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionInformation,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userDocRef;
};

export {
  jsApp,
  signInWithPopupGoogleProvider,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
};
