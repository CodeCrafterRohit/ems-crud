import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOsDgHlBaKZ-Q7WI8fDo900oonYplbB48",
  authDomain: "ems-crud-b015c.firebaseapp.com",
  projectId: "ems-crud-b015c",
  storageBucket: "ems-crud-b015c.firebasestorage.app",
  messagingSenderId: "395814082982",
  appId: "1:395814082982:web:bf4127ddb60ad5352fd767",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export let __AUTH = getAuth(firebaseApp);
export let __DB = getFirestore(firebaseApp);

export default firebaseApp;
