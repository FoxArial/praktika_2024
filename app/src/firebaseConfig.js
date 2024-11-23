import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyD2c0bQJi1M_Yobf5g8WYUDpFEcCo5hY1U",
  authDomain: "teafi-75cdd.firebaseapp.com",
  projectId: "teafi-75cdd",
  storageBucket: "teafi-75cdd.firebasestorage.app",
  messagingSenderId: "1026940677184",
  appId: "1:1026940677184:web:87548a706f022c813ac3a5",
  measurementId: "G-K17D60917E"
};
  
  // Initialize Firebase
  const apps = initializeApp(firebaseConfig);
  

  export default apps;