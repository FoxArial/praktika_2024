import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


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
  const apps = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Ініціалізуйте Auth лише один раз
const auth = getAuth(apps) || initializeAuth(apps, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { apps, auth };
