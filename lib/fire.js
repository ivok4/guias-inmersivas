import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAKWjisoAKsDt7RU4KITWx0G2K3Xs30L_E",
    authDomain: "guias-aumentadas-26bd8.firebaseapp.com",
    databaseURL: "https://guias-aumentadas-26bd8.firebaseio.com",
    projectId: "guias-aumentadas-26bd8",
    storageBucket: "guias-aumentadas-26bd8.appspot.com",
    messagingSenderId: "289868652750",
    appId: "1:289868652750:web:e4ddb303136e10d70eb09f"
  };

  const fire = firebase.initializeApp(firebaseConfig);
    export default fire;