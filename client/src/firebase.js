import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGJxlCMRJStHX2iOQ_pZZtnpEAsdCNowE",
  authDomain: "wheather-384315.firebaseapp.com",
  projectId: "wheather-384315",
  storageBucket: "wheather-384315.appspot.com",
  messagingSenderId: "921869038733",
  appId: "1:921869038733:web:f1eb69080bccc8205bdec4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
