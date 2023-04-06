// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkNn8zT9rRLIGUrJeh4Ab7cv5Ah9kiLBY",
  authDomain: "linkedin-clone-b0c46.firebaseapp.com",
  projectId: "linkedin-clone-b0c46",
  storageBucket: "linkedin-clone-b0c46.appspot.com",
  messagingSenderId: "288851117312",
  appId: "1:288851117312:web:8cdf197dd92db8eb979fe5",
  measurementId: "G-GJFVF13KGM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
