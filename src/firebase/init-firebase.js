import firebase from "firebase/app";

const firebaseConfig = {
   
  apiKey: "AIzaSyBC7Rr7Rxif4V_XVi4lkRLXbN7QwboXdpo",
  authDomain: "socialdrink-8ef3c.firebaseapp.com",
  databaseURL: "https://socialdrink-8ef3c.firebaseio.com",
  projectId: "socialdrink-8ef3c",
  storageBucket: "socialdrink-8ef3c.appspot.com",
  messagingSenderId: "302577066609",
  appId: "1:302577066609:web:2db4002cb85fb3a0"
  };

  export const firebaseInstance = firebase.initializeApp(firebaseConfig);