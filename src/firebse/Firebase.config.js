// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq1fk8k7zKhB_D8iUbpIl1j2A32d6KF9M",
  authDomain: "dragon-news-201af.firebaseapp.com",
  projectId: "dragon-news-201af",
  storageBucket: "dragon-news-201af.firebasestorage.app",
  messagingSenderId: "490727541500",
  appId: "1:490727541500:web:d3a866add7270bb32ae579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;