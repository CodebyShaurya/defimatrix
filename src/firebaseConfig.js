// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_keZNa8y15rJEhp-iF1tFFWMqcG7vhVU",
    authDomain: "defimatrix-780da.firebaseapp.com",
    projectId: "defimatrix-780da",
    storageBucket: "defimatrix-780da.appspot.com",
    messagingSenderId: "778942570862",
    appId: "1:778942570862:web:f649b934357fa6514c617f",
    measurementId: "G-WNBRG2JN6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
