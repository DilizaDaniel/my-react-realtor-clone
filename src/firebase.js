// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV2c3dabqxoKYlP1HlzZeqmG3Atc4RKfM",
  authDomain: "my-react-realtor-clone.firebaseapp.com",
  projectId: "my-react-realtor-clone",
  storageBucket: "my-react-realtor-clone.appspot.com",
  messagingSenderId: "559275033680",
  appId: "1:559275033680:web:0c820b4176cc4bc3f93d55"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();