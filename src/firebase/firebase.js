import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAhprLMYhVqqoYxPxpAbzL23PixhRNRpno',
  authDomain: 'chat-943f3.firebaseapp.com',
  projectId: 'chat-943f3',
  storageBucket: 'chat-943f3.appspot.com',
  messagingSenderId: '29875415782',
  appId: '1:29875415782:web:763c50f02bade8728b6927',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
