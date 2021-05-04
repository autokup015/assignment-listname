import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyD6K9i-pGZ4MCaHa4po_v0pnNcc8Ywcwhc",
  authDomain: "listname-vue.firebaseapp.com",
  projectId: "listname-vue",
  storageBucket: "listname-vue.appspot.com",
  messagingSenderId: "635834429416",
  appId: "1:635834429416:web:a22e92a8c79e8c94047e5d",
  measurementId: "G-WKKLV17SNQ",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
