// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBwJTn3Pn4ooAqrRb10Wy0Ir0wveoa3D8w',
  authDomain: 'insta-react-fdf8d.firebaseapp.com',
  projectId: 'insta-react-fdf8d',
  storageBucket: 'insta-react-fdf8d.appspot.com',
  messagingSenderId: '254356137684',
  appId: '1:254356137684:web:4890a408900dcab3f33d41',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
