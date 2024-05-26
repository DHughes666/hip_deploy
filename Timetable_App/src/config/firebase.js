import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDtCa7vArzhnSqvX5Mq91dQQ2gB587GIug",
    authDomain: "savey-b4ce7.firebaseapp.com",
    projectId: "savey-b4ce7",
    storageBucket: "savey-b4ce7.appspot.com",
    messagingSenderId: "146769839208",
    appId: "1:146769839208:web:8be8650bf0c9b6e051a7dd",
    measurementId: "G-MKHY32HP2W"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
