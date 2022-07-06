import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxKUZT6DPLButrgynn6P-tNhU0gMyqqlA",
  authDomain: "clone-96b91.firebaseapp.com",
  projectId: "clone-96b91",
  storageBucket: "clone-96b91.appspot.com",
  messagingSenderId: "355843987456",
  appId: "1:355843987456:web:e6d477bcb8df4ad650a0e5",
  measurementId: "G-X1Q42T86GN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);