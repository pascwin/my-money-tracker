// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAS_RCFU3dNs0Tx15GsLZfNJl4lca1Akds",
    authDomain: "my-money-36d00.firebaseapp.com",
    projectId: "my-money-36d00",
    storageBucket: "my-money-36d00.appspot.com",
    messagingSenderId: "378977743234",
    appId: "1:378977743234:web:9d9e92c201a38cd56a1f9b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp --> special object to pass create at to an object related to firebase
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }