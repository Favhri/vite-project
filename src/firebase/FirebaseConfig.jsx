// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYISvvFNfc0yKKsXi13vSPX6qtGTZj9Tc",
  authDomain: "myblog-78884.firebaseapp.com",
  projectId: "myblog-78884",
  storageBucket: "myblog-78884.appspot.com",
  messagingSenderId: "1036106308618",
  appId: "1:1036106308618:web:f40e15af36918e88bb53f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {fireDb, auth, storage}