import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDb8uicvqTVux4x1rAnpk4DvEgIVqv3b50",

  authDomain: "upload-img-dev.firebaseapp.com",

  projectId: "upload-img-dev",

  storageBucket: "upload-img-dev.appspot.com",

  messagingSenderId: "287097047199",

  appId: "1:287097047199:web:d2f0012d52eff6d8b9baaa",

};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
