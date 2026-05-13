// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH_RVw8UkEJP6HD7UPF4Z5XwzghCHwsEU",
  authDomain: "wakeru-1.firebaseapp.com",
  projectId: "wakeru-1",
  storageBucket: "wakeru-1.firebasestorage.app",
  messagingSenderId: "32623156409",
  appId: "1:32623156409:web:79a3a819417c9c1d624f68",
  measurementId: "G-N74YYBNWZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);