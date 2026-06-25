// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// TODO: Replace the following with your app's Firebase project configuration
// To get these, go to the Firebase Console -> elite-yacht-rentals project settings
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "elite-yacht-rentals.firebaseapp.com",
  projectId: "elite-yacht-rentals",
  storageBucket: "elite-yacht-rentals.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
// Se asume que has creado una base de datos de Firestore en la consola
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

console.log("Firebase initialized para el proyecto elite-yacht-rentals");
