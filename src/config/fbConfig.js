  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAwsannhqGItSEVbGulZhYQVVx5eMKm6zI",
    authDomain: "my-plan-react.firebaseapp.com",
    projectId: "my-plan-react",
    storageBucket: "my-plan-react.appspot.com",
    messagingSenderId: "754445386967",
    appId: "1:754445386967:web:3af6e4ddcc9e4a14311c92",
    measurementId: "G-9G2V4CKHRN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;