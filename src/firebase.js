import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "codedex-9472d.firebaseapp.com",
  projectId: "codedex-9472d",
  storageBucket: "codedex-9472d.appspot.com",
  messagingSenderId: "611026052592",
  appId: "1:611026052592:web:b2e711a1bc63cf96636935"
};


export const app = initializeApp(firebaseConfig);

