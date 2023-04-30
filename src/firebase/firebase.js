// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore,collection} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHSINQV7Tu2zQqA1k_er4CGUBSrKT8B6k",
  authDomain: "movie-database-18f01.firebaseapp.com",
  projectId: "movie-database-18f01",
  storageBucket: "movie-database-18f01.appspot.com",
  messagingSenderId: "263705298725",
  appId: "1:263705298725:web:1b41f1778e6cf6b5bbbccc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db,"movies");
export default app;