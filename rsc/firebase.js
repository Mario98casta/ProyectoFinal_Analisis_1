// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBYcWUFvFzaqoD8kkHK_DZglTEAcPbMLo",
  authDomain: "turiguate-a4534.firebaseapp.com",
  projectId: "turiguate-a4534",
  storageBucket: "turiguate-a4534.appspot.com",
  messagingSenderId: "988594567907",
  appId: "1:988594567907:web:1ec7620db54505e0bce3d6",
  measurementId: "G-3T74SS07ZE"
};

// Inicializa Firebase
export const app = initializeApp(firebaseConfig);

// Inicializa Firebase Authentication y obtiene una referencia para el servicio
export const auth = getAuth(app);
