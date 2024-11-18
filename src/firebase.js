// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw7qjxTnurdxXhitWDyjaAm-sthiSrMDw",
  authDomain: "wedding-1e94e.firebaseapp.com",
  projectId: "wedding-1e94e",
  storageBucket: "wedding-1e94e.firebasestorage.app",
  messagingSenderId: "940296723266",
  appId: "1:940296723266:web:871f05017abc428c4c06db",
  measurementId: "G-CRY4YMN3LT",
  databaseURL: "https://wedding-1e94e-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const database = getDatabase(app);
