// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "rikucommerce.firebaseapp.com",
    projectId: "rikucommerce",
    storageBucket: "rikucommerce.appspot.com",
    messagingSenderId: "375708470519",
    appId: "1:375708470519:web:08c2dc32a51e31464c97f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);