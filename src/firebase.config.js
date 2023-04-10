import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDxOJ36oEUaWfDlk3iszd9siOuyq7f6A6E",
  authDomain: "tunimart-3276d.firebaseapp.com",
  projectId: "tunimart-3276d",
  storageBucket: "tunimart-3276d.appspot.com",
  messagingSenderId: "965379905422",
  appId: "1:965379905422:web:53ed5297a743f1fa3236df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);
export const storage = getStorage(app);

export default app;