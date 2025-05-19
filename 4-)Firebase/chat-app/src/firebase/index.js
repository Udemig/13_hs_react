// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//! authentication importlar
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//! database importları
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGGGd07Ivtd18DNlmP0w00mUrsaFuC7pg",
  authDomain: "hs-chat-ed4f8.firebaseapp.com",
  projectId: "hs-chat-ed4f8",
  storageBucket: "hs-chat-ed4f8.firebasestorage.app",
  messagingSenderId: "485029671070",
  appId: "1:485029671070:web:eb28e016d7cd67e7754b8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! authentication referansı al
export const auth = getAuth(app);

//! google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

//! database referansını al
export const db = getFirestore(app);
