import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD6QWZwqUsKMDCbiYI9gIAG8VAPcRJC-7E",
  authDomain: "breakpoint-38060.firebaseapp.com",
  projectId: "breakpoint-38060",
  storageBucket: "breakpoint-38060.appspot.com",
  messagingSenderId: "276064353803",
  appId: "1:276064353803:web:bbfb1b3f69672b1c71910e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)