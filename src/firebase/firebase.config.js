import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBDc206tQNEWf2qXbiOIPXiSdiJhPSYFZA",
    authDomain: "mayo-clinic-fe97f.firebaseapp.com",
    projectId: "mayo-clinic-fe97f",
    storageBucket: "mayo-clinic-fe97f.appspot.com",
    messagingSenderId: "91531732106",
    appId: "1:91531732106:web:0f633b6d02804863a8f973"
};

const app = initializeApp(firebaseConfig);

export default app;