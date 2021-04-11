import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAycuQ89WsqL6CkrIrbj3MsGX4vKTzrRzQ",
  authDomain: "listname-19189.firebaseapp.com",
  projectId: "listname-19189",
  storageBucket: "listname-19189.appspot.com",
  messagingSenderId: "678505110920",
  appId: "1:678505110920:web:a862df275e96d0fc0aee3d",
  measurementId: "G-RGZEJQ6HM0",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };

