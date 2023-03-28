// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-storage.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxjO1XjLuEudO_QsbBR0JN9dvp1I6BJWw",
  authDomain: "curso-firebase-61ad6.firebaseapp.com",
  projectId: "curso-firebase-61ad6",
  storageBucket: "curso-firebase-61ad6.appspot.com",
  messagingSenderId: "847958041171",
  appId: "1:847958041171:web:3efa30e4ef98f8dc875ca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const storageRef = ref(storage, 'images')

export { 
  auth,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  provider,
  storage,
  storageRef,
  ref,
  uploadBytes,
  getDownloadURL,
}