import firebase from "firebase";

// var firebaseConfig = {
//   apiKey: "AIzaSyCONQfjLjL2QDMOnR6aIMx8lvfWhlAO84w",
//   authDomain: "music-site-81730.firebaseapp.com",
//   databaseURL: "https://music-site-81730.firebaseio.com",
//   projectId: "music-site-81730",
//   storageBucket: "music-site-81730.appspot.com",
//   messagingSenderId: "856869226261",
//   appId: "1:856869226261:web:9d413d065569b6bd790b1c",
//   measurementId: "G-4VZ1C7RK5Q",
// };

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_BASEURL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();
