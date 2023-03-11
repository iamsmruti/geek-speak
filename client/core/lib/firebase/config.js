import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBsdHYhu0kuw1H-UtVEc7ihcJx8v4t55FA",
    authDomain: "blogarithm-bdb61.firebaseapp.com",
    projectId: "blogarithm-bdb61",
    storageBucket: "blogarithm-bdb61.appspot.com",
    messagingSenderId: "792115557520",
    appId: "1:792115557520:web:5ec13ca8a159433dded415",
    measurementId: "G-H0FQ2C2NM8"
};

export const firebaseApp = initializeApp(firebaseConfig);