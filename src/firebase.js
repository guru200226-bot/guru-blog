// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "diginik-305d2.firebaseapp.com",
  projectId: "diginik-305d2",
  storageBucket: "diginik-305d2.firebasestorage.app",
  messagingSenderId: "120452314303",
  appId: "1:120452314303:web:17688e1e73d6d399e8420a",
  measurementId: "G-E6G1PNP9L1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);