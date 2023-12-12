// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCajhNd9HbS00YhUxG11U0INQYZ_hcdCak",
  authDomain: "cd-library-management-system.firebaseapp.com",
  projectId: "cd-library-management-system",
  storageBucket: "cd-library-management-system.appspot.com",
  messagingSenderId: "681119174270",
  appId: "1:681119174270:web:aaa6411db5d6d2aa84522f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;