import firebase from "firebase/app";
import "firebase/storage";

 // Initialize Firebase
const config = {
    apiKey: "AIzaSyDCW3niQ3uPc8s7MZpHIbqYUKZMSGubP9I",
    authDomain: "authors-heaven-groot.firebaseapp.com",
    databaseURL: "https://authors-heaven-groot.firebaseio.com",
    projectId: "authors-heaven-groot",
    storageBucket: "authors-heaven-groot.appspot.com",
    messagingSenderId: "53261055707",
}

 firebase.initializeApp(config);

 const storage = firebase.storage();

 export { storage, firebase as default };