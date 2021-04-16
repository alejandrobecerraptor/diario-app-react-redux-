import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWH9FU32HSCpOU1Hrem-46gtf5YTN-0As",
  authDomain: "react-app-cursos-c31f8.firebaseapp.com",
  projectId: "react-app-cursos-c31f8",
  storageBucket: "react-app-cursos-c31f8.appspot.com",
  messagingSenderId: "178743541648",
  appId: "1:178743541648:web:185655aa946f25d4203d15",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
