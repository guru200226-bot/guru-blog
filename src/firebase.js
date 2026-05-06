import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "diginik-305d2.firebaseapp.com",
  projectId: "diginik-305d2",
  storageBucket: "diginik-305d2.appspot.com",
  messagingSenderId: "120452314303",
  appId: "1:120452314303:web:17688e1e73d6d399e8420a",
};

export const app = initializeApp(firebaseConfig);
