// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6ltyRGxGtmHWjPb2Tgzjg4Mv10QUDfTk",
  authDomain: "exclusive-ca6e1.firebaseapp.com",
  projectId: "exclusive-ca6e1",
  storageBucket: "exclusive-ca6e1.appspot.com",
  messagingSenderId: "38070896881",
  appId: "1:38070896881:web:edad702818fa515acac150",
  measurementId: "G-8X8DQ1R6QJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;