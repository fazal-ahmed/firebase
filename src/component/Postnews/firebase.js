import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCKqjg_y9P7QNswEAGZHipuvMZMXsY2nwg",
    authDomain: "steam-canto-271505.firebaseapp.com",
    databaseURL: "https://steam-canto-271505.firebaseio.com",
    projectId: "steam-canto-271505",
    storageBucket: "steam-canto-271505.appspot.com",
    messagingSenderId: "331398368611",
    appId: "1:331398368611:web:ef909bc8607933f3839756",
    measurementId: "G-88295NCHEM"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
