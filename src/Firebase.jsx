// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCcwjazJN3SXN1v6jQhu2MPWT_2oeOoTUE",
  authDomain: "tourist-backend.firebaseapp.com",
  projectId: "tourist-backend",
  storageBucket: "tourist-backend.firebasestorage.app",
  messagingSenderId: "740988442779",
  appId: "1:740988442779:web:6d9a96c25a8c47c2abce3e",
  measurementId: "G-M5VD73J3FD",
  databaseURl:"https://tourist-backend-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
