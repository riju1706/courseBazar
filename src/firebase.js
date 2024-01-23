// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkaoYUqhW9P3sO0N4GRSSYckOvQbnUVzI",
  authDomain: "course-intern.firebaseapp.com",
  databaseURL: "https://course-intern-default-rtdb.firebaseio.com",
  projectId: "course-intern",
  storageBucket: "course-intern.appspot.com",
  messagingSenderId: "834493498384",
  appId: "1:834493498384:web:17ea4efe45e41482e0f695",
  measurementId: "G-LNZV1N1SR9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
