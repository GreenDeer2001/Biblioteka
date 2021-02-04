import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBN9giAiGQWwG9xKmynODr2eoDd1Lv9fk0",
    authDomain: "library-5ca5c.firebaseapp.com",
    databaseURL: "https://library-5ca5c.firebaseio.com",
    projectId: "library-5ca5c",
    storageBucket: "library-5ca5c.appspot.com",
    messagingSenderId: "632525211780",
    appId: "1:632525211780:web:4ce3a72b87b3a1bdc69ad1",
    measurementId: "G-YFCW5452B6"
  };
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();



  export {db , auth};
