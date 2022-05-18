// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBn6wFJaq2b3YAopz4Cnd69aBzNJiK4bbY",
    authDomain: "to-do-app-e8377.firebaseapp.com",
    projectId: "to-do-app-e8377",
    storageBucket: "to-do-app-e8377.appspot.com",
    messagingSenderId: "820099522316",
    appId: "1:820099522316:web:4abe57f35e46be3d33f329"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;