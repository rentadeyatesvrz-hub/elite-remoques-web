import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Remplaza esto con la configuración de tu proyecto "elite-yacht-rentals"
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
// Como indicaste, esta es la MISMA cuenta de firebase que usas para yates,
// lo cual es una excelente práctica. Puedes crear una colección separada
// llamada 'remolques_leads' aquí en la misma base de datos.
export const db = getFirestore(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);

console.log("Firebase initialized para el proyecto elite-yacht-rentals");
