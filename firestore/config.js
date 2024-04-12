// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
   apiKey: "AIzaSyAfJWRWbhnLb8-sGvjrAleWlIq4XOfZfpI",
   authDomain: "firestore-80c5d.firebaseapp.com",
   projectId: "firestore-80c5d",
   storageBucket: "firestore-80c5d.appspot.com",
   messagingSenderId: "299903558246",
   appId: "1:299903558246:web:25c2a9115e001757a683a7",
   measurementId: "G-QH2MTHQ47C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//export module
module.exports = app;