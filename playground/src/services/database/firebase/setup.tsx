// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARLA7weM54S-jmdPpRBZTMvRBEcjx5-SQ",
  authDomain: "playground-824b3.firebaseapp.com",
  projectId: "playground-824b3",
  storageBucket: "playground-824b3.firebasestorage.app",
  messagingSenderId: "68283790236",
  appId: "1:68283790236:web:087e89f139d8492a74ce59",
  measurementId: "G-H9FY3B7CFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);