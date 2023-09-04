"use strict";
import { signInWithGooglePopup } from "./firebase.js";
const userEl = document.getElementById("user"),
  btnSignInWithGoogle = document.getElementById("btn-google-sign-in");

btnSignInWithGoogle.addEventListener("click", async () => {
  const { user } = await signInWithGooglePopup();

  const { displayName, email } = user;

  const newUser = {
    displayName,
    email,
  };

  console.log(newUser);
});
