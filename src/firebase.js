
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAEGQ1oNWlVz6HeZ-nTSF_lAFBPIYdJOS0",
    authDomain: "reeltorauth.firebaseapp.com",
    projectId: "reeltorauth",
    storageBucket: "reeltorauth.firebasestorage.app",
    messagingSenderId: "760643943507",
    appId: "1:760643943507:web:5f8cc1ce0c2d852fb19aa6",
    measurementId: "G-LGM0ZXX5V3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);