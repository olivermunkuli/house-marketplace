import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCkByflIDgHjF4OzdNmCWlXlrBnXrBmdlY',
  authDomain: 'house-marketplace-app-71ac1.firebaseapp.com',
  projectId: 'house-marketplace-app-71ac1',
  storageBucket: 'house-marketplace-app-71ac1.appspot.com',
  messagingSenderId: '572608338068',
  appId: '1:572608338068:web:71b738c441e9e77341bc81',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
