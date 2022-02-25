// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyABr4Udvy6RXMSDucs1_W7yvb9V5StTdFc",
  authDomain: "lab-database-c6f5d.firebaseapp.com",
  projectId: "lab-database-c6f5d",
  storageBucket: "lab-database-c6f5d.appspot.com",
  messagingSenderId: "648744134447",
  appId: "1:648744134447:web:c807a7d3169ec8fcc263da",
  measurementId: "G-SRQHFLB36C",
});

const db = getFirestore(firebaseApp);
export default db;
