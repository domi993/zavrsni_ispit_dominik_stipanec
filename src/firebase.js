// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL8CEbkZAJkks9_FkLzG-LhyVC-mS4DeA",
  authDomain: "chat-app-domi.firebaseapp.com",
  projectId: "chat-app-domi",
  storageBucket: "chat-app-domi.appspot.com",
  messagingSenderId: "778085836527",
  appId: "1:778085836527:web:f19d5321d0c556093bdd1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
