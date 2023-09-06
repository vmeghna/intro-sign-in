"use strict";
import {
  signInWithPopupGoogleProvider,
  createUserDocumentFromAuth,
} from "./firebase.js";
const usernameEl = document.getElementById("username");

const signInBtn = document.getElementById("signIn");

//function
const init = () => {};

//events
signInBtn.addEventListener("click", async () => {
  const { user } = await signInWithPopupGoogleProvider();

  const { displayName, email } = user;

  const newUser = {
    displayName,
    email,
  };
  console.log(user);
  console.log(newUser);

  createUserDocumentFromAuth(user);
  usernameEl.innerText = newUser.displayName;
});
//initial settings
init();
