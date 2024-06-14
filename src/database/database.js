import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey : "AIzaSyB5iGZ5aXhG1XKodTthaPzfzgU2pNg2d1U" , 
  authDomain : "fir-dtb-e8adb.firebaseapp.com" , 
  projectId : "fir-dtb-e8adb" , 
  storageBucket : "fir-dtb-e8adb.appspot.com" , 
  messagingSenderId : "603694423615" , 
  appId : "1:603694423615:web:e3c0570eed6d1f7388e28a" 
};

// Initialize Firebase
export const datafirebase = initializeApp(firebaseConfig);
