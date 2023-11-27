// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB83MT33g08Hu7XQ9cworrWim7kAj8NmDs",
  authDomain: "ema-john-auth-projects.firebaseapp.com",
  projectId: "ema-john-auth-projects",
  storageBucket: "ema-john-auth-projects.appspot.com",
  messagingSenderId: "391251144605",
  appId: "1:391251144605:web:352cd6951c2a2054074974"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app