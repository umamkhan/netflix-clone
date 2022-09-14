// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4lBLkkVTGsttMcMYuIkzGgL0FWxKas2g",
  authDomain: "netlflix-react-yt.firebaseapp.com",
  projectId: "netlflix-react-yt",
  storageBucket: "netlflix-react-yt.appspot.com",
  messagingSenderId: "814866361589",
  appId: "1:814866361589:web:70460cb12bbd5218e729bc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);