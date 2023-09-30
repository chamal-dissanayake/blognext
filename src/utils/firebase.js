// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-cf0fd.firebaseapp.com",
  projectId: "blog-cf0fd",
  storageBucket: "blog-cf0fd.appspot.com",
  messagingSenderId: "681896773422",
  appId: "1:681896773422:web:6d2e49c23a52b220a81cbf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);