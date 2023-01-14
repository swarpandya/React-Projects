import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCbSSo1GmDMVdHKIVX1Qec_NCeVoeevoaY",
  authDomain: "swar-portfolio.firebaseapp.com",
  projectId: "swar-portfolio",
  storageBucket: "swar-portfolio.appspot.com",
  messagingSenderId: "265399225465",
  appId: "1:265399225465:web:8f62ec13dd300dbc39d8a8"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();