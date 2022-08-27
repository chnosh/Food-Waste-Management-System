(function () {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDkdaz-y8KrpVTW3WPbix3YW5Br-coqSgg",
    authDomain: "mudita2-9ac81.firebaseapp.com",
    databaseURL: "https://mudita2-9ac81-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mudita2-9ac81",
    storageBucket: "mudita2-9ac81.appspot.com",
    messagingSenderId: "194388548933",
    appId: "1:194388548933:web:67f37a41003018e735b22c",
    measurementId: "G-0CJSVFRPXF"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

    //Add Login Event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        auth.signInWithEmailAndPassword(email, password).then(user =>{
            alert("Login Successful :)");
        }).catch(err => {
            alert(err.message);
        });
        
    });

    //Add Signup Event
    btnSignup.addEventListener('click', e => {

        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Signup Successful :)")
        }).catch(err => {
            alert(err.message);
        });

    });


}());