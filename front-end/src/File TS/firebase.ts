
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
const apiUrl = import.meta.env.FIREBASE_KEY;

const firebaseConfig = {
  apiKey: apiUrl,
  authDomain: "data-6d9cf.firebaseapp.com",
  projectId: "data-6d9cf",
  storageBucket: "data-6d9cf.firebasestorage.app",
  messagingSenderId: "112538899141",
  appId: "1:112538899141:web:653a1660aaa35db1a396ac",
  measurementId: "G-2T3Z8LTWK3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
