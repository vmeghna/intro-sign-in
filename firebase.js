// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

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
const signInWithGooglePopup = () =>
  signInWithPopup(jsAuth, jsGoogleAuthProvider);

export { jsApp, signInWithGooglePopup };
