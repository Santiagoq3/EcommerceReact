import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD-a45cY0rZ7s1AkCCQnRHqLUXNU33rMrs",
  authDomain: "react-ecommerce-coder-99513.firebaseapp.com",
  projectId: "react-ecommerce-coder-99513",
  storageBucket: "react-ecommerce-coder-99513.appspot.com",
  messagingSenderId: "904903918940",
  appId: "1:904903918940:web:90b47843c7288b8010ed99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app)