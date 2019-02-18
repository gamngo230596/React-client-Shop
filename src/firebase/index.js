
import firebase from 'firebase/app';
import 'firebase/storage';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCPn9mgH5Es6MafU0GtSKtHN9bkGgMOj2s",
    authDomain: "lenshop-2a332.firebaseapp.com",
    databaseURL: "https://lenshop-2a332.firebaseio.com",
    projectId: "lenshop-2a332",
    storageBucket: "lenshop-2a332.appspot.com",
    messagingSenderId: "984087587287"
  };
  firebase.initializeApp(config);
  const storage = firebase.storage();
  export {
      storage,firebase as default
  }