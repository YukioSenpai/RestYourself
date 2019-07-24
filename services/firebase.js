import firebase from 'firebase/app';
import "firebase/auth";


const config = {
    apiKey: "AIzaSyDbCbZ-PmMyo665W2DQesOwU8wqdymk-pw",
    authDomain: "restyourself-b7030.firebaseapp.com",
    databaseURL: "https://restyourself-b7030.firebaseio.com",
    projectId: "restyourself-b7030",
    storageBucket: "restyourself-b7030.appspot.com",
    messagingSenderId: "343918189143",
    appId: "1:343918189143:web:e196056c7e29be9d"
};

!firebase.apps.length ? firebase.initializeApp(config) : "";

export const auth = firebase.auth();