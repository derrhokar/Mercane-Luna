// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyADZHYsxN1XBZem-3TR5rTrsfxZ9z4uh0c',
  authDomain: 'mercane-81607.firebaseapp.com',
  projectId: 'mercane-81607',
  storageBucket: 'mercane-81607.appspot.com',
  messagingSenderId: '691459845793',
  appId: '1:691459845793:web:b8317ad17fb9fb41108ae0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
