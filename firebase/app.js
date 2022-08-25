// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCt_o4SL5dqcMqZUJowU8FOtsYWaiz17fA",
    authDomain: "mundo-invertido---dio.firebaseapp.com",
    projectId: "mundo-invertido---dio",
    storageBucket: "mundo-invertido---dio.appspot.com",
    messagingSenderId: "950845798897",
    appId: "1:950845798897:web:0ee15ebe8e319d0d996c50"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app //exportando do app para o JS