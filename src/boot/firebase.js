import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYh8h2E2TopX4rI1_jF7a0Dl51ztR7n7M",
  authDomain: "quitter2-ce882.firebaseapp.com",
  projectId: "quitter2-ce882",
  storageBucket: "quitter2-ce882.appspot.com",
  messagingSenderId: "948570550708",
  appId: "1:948570550708:web:460d2e83a77ae5efb042e1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// access firebase database with db variable
const db = firebase.firestore()

export default db

