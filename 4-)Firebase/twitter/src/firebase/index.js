// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkbGS-d71NrPUBCmsDbzlkAvfOTzjbp1M",
  authDomain: "hs-twitter-ed840.firebaseapp.com",
  projectId: "hs-twitter-ed840",
  storageBucket: "hs-twitter-ed840.firebasestorage.app",
  messagingSenderId: "489717435165",
  appId: "1:489717435165:web:fa3a100732438e82056ff4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansını alma
export const auth = getAuth(app);

// google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();
