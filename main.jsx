import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:            "AIzaSyDZpUwDf8VnRutm4ID_9nLxDcYOBgDlXDo",
  authDomain:        "elgar-class.firebaseapp.com",
  projectId:         "elgar-class",
  storageBucket:     "elgar-class.firebasestorage.app",
  messagingSenderId: "528993111139",
  appId:             "1:528993111139:web:8f4dab12b2c1e60819fc56",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
