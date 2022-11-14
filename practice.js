
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDJPLrNF1NONUmpf9WZbU-4Q-gwNvB5eK0",
    authDomain: "kwitter-3b805.firebaseapp.com",
    databaseURL: "https://kwitter-3b805-default-rtdb.firebaseio.com",
    projectId: "kwitter-3b805",
    storageBucket: "kwitter-3b805.appspot.com",
    messagingSenderId: "942120114696",
    appId: "1:942120114696:web:360ec9b92f83a63bd54fbd",
    measurementId: "G-61CPH2P3T6"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 function add() {
    t=document.getElementById('put').value;

    firebase.database().ref("parent").child(t).set({
        School:"Universal",
        Age:8
    });
}