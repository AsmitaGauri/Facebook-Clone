
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyA0Ty9hVepWt18QNM5iULWY7Wlin6GlMhg",
    authDomain: "facebookclone-5d4ba.firebaseapp.com",
    databaseURL: "https://facebookclone-5d4ba.firebaseio.com",
    projectId: "facebookclone-5d4ba",
    storageBucket: "facebookclone-5d4ba.appspot.com",
    messagingSenderId: "760992343619",
    appId: "1:760992343619:web:698f55b00fca9f72fd96f6",
    measurementId: "G-Q1EBCGY1HD"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();

  const provider=new firebase.auth.GoogleAuthProvider();


  export {provider,auth};
  export default db;