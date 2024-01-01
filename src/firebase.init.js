
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmFukKMX6F_OVlCOWAAx7oaWEUUVm78R0",
  authDomain: "simple-firebase-5a3a2.firebaseapp.com",
  projectId: "simple-firebase-5a3a2",
  storageBucket: "simple-firebase-5a3a2.appspot.com",
  messagingSenderId: "350857357628",
  appId: "1:350857357628:web:e65ebdbb90673a52029639"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; 