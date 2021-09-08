import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBBgAzuBjkjql4n5NpORB2ACC4yX5agEO4",
  authDomain: "anonymous-da3b5.firebaseapp.com",
  projectId: "anonymous-da3b5",
  storageBucket: "anonymous-da3b5.appspot.com",
  messagingSenderId: "1049067056124",
  appId: "1:1049067056124:web:b1a19a55ffe9da1a69a079",
  measurementId: "G-E1S6WBS8RV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;