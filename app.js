// Fire base config
const firebaseConfig = {
    apiKey: "AIzaSyD0N7BZl2W736PbI9rfF5FO7AJbBEwdPQc",
    authDomain: "authentication-f2954.firebaseapp.com",
    projectId: "authentication-f2954",
    storageBucket: "authentication-f2954.appspot.com",
    messagingSenderId: "263055319085",
    appId: "1:263055319085:web:1b2913626164081ae898a4"
  };
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
//Signup Function
let signUpButton = document.getElementById("signup");

signUpButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("signup click");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
     location.reload();
    //  signed in
    var user = userCredential.user;
    console.log("user, user.mail");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code", errorCode);
        console.log("error message", errorMessage);
    })
});


//Signup Function
let signInButton = document.getElementById("signin");

signInButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("signin click");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
     location.reload();
    //  signed in
    var user = userCredential.user;
    console.log("user, user.mail");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code", errorCode);
        console.log("error message", errorMessage);
    })
});


//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes


//Lifecycle hooks
// auth.onAurthStarteChanged(function (user) {
//     if (users) {
//         var email = user.email;
//         var users = document.getElementById("user")

//         console.log("users")
//     }
// })