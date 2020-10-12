


import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAT6JVHQP6kZWnF01cSp5LXUOeF_aMpa9M",
  authDomain: "todo-app-cp-45f29.firebaseapp.com",
  databaseURL: "https://todo-app-cp-45f29.firebaseio.com",
  projectId: "todo-app-cp-45f29",
  storageBucket: "todo-app-cp-45f29.appspot.com",
  messagingSenderId: "689108774445",
  appId: "1:689108774445:web:08e81629cd9a6f2af152a4",
  measurementId: "G-6ETDZNMPL3"
      

})

const db=firebaseApp.firestore();


export  default db;