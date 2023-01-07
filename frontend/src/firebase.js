// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBNAjXR0N4EbQzSXVvOoi-4yrQKbGLWy_k",
    authDomain: "qds-2023.firebaseapp.com",
    projectId: "qds-2023",
    storageBucket: "qds-2023.appspot.com",
    messagingSenderId: "259392948048",
    appId: "1:259392948048:web:12b91c5a60f2233a920e55"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);