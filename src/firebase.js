import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDlELX2MFZonkmYqDbL8V4ZFbfk0WIPsuQ",
    authDomain: "ui-aa65d.firebaseapp.com",
    databaseURL: "https://ui-aa65d.firebaseio.com",
    projectId: "ui-aa65d",
    storageBucket: "ui-aa65d.appspot.com",
    messagingSenderId: "358741395234",
    appId: "1:358741395234:web:33577fbca4999ad167077b",
    measurementId: "G-Q8NN5FVYRR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
