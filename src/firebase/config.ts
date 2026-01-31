// src/firebase/config.ts
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCj2M9zx6xfRCo6ORX3l7uPO5vhdYVM2HE",
  authDomain: "my-portfolio-4d462.firebaseapp.com",
  databaseURL: "https://my-portfolio-4d462-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-portfolio-4d462",
  storageBucket: "my-portfolio-4d462.firebasestorage.app",
  messagingSenderId: "580465369750",
  appId: "1:580465369750:web:b14786630042b3124658b7",
  measurementId: "G-63WPD2XRWP"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);