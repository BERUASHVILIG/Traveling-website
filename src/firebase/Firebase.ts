// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbivxhbpC_DS3Waotq_1TpXE6fdvS1sLA",
  authDomain: "travelingpage-react.firebaseapp.com",
  projectId: "travelingpage-react",
  storageBucket: "travelingpage-react.appspot.com",
  messagingSenderId: "386234414903",
  appId: "1:386234414903:web:8b1c517080114ebf07ccb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
