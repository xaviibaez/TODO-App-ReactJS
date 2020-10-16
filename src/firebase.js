/*
const firebaseConfig = {
    apiKey: "AIzaSyA40FPYrZChsWGAjLdKh9f3WEERauMadD0",
    authDomain: "todo-app-cp-2d17d.firebaseapp.com",
    databaseURL: "https://todo-app-cp-2d17d.firebaseio.com",
    projectId: "todo-app-cp-2d17d",
    storageBucket: "todo-app-cp-2d17d.appspot.com",
    messagingSenderId: "105164647078",
    appId: "1:105164647078:web:523cd524e5edea7f412267",
    measurementId: "G-50TVLCKG3R"
  };
  */

import firebase from "firebase";

//Constantes que sacamos de la configuracion del proyecto en firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA40FPYrZChsWGAjLdKh9f3WEERauMadD0",
  authDomain: "todo-app-cp-2d17d.firebaseapp.com",
  databaseURL: "https://todo-app-cp-2d17d.firebaseio.com",
  projectId: "todo-app-cp-2d17d",
  storageBucket: "todo-app-cp-2d17d.appspot.com",
  messagingSenderId: "105164647078",
  appId: "1:105164647078:web:523cd524e5edea7f412267",
  measurementId: "G-50TVLCKG3R"
});

//Con esta constante conectamos a la bd de firebase y lo guardamos todo en el objeto db
const db = firebaseApp.firestore();

//Lo exportamos asi tenemos acceso a db desde cualquier lugar de la app
//export { db };
export default db;