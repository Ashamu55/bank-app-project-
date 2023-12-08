// const form = document.getElementById("form");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const confirm = document.getElementById("confirm");
// form.addEventListener("submit", (e) => {
    // e.preventDefault();
    // checkInputs();
// });
// function checkInputs() {
    // to prevent from spaces we use trim
    // const usernamevalue = username.value.trim();
    // const emailvalue = email.value.trim();
    // const passwordvalue = password.value.trim();
    // const confirmvalue = confirm.value.trim();
    // if (usernamevalue === '') {
        // add error class
        // setError(username, "This field cannot be blank !!!!!!");

    // }
    // else {
        // add success class
        // setSuccess(username);

    // }
    // if (emailvalue === '') {
        // add error class
        // setError(email, "This field cannot be blank !!!!!!");

    // }
    // else if (!isemail(emailvalue)) {
        // setError(email, "Check the email dude !!!!!!");


    // }
    // else {
        // add success class
        // setSuccess(email);

    // }
    // if (passwordvalue === '') {
        // add error class
        // setError(password, "This field cannot be blank !!!!!!");

    // } else if (passwordvalue.length <= 4) {
        // setError(password, "Password is too small!!")
    // }
    // else {
        // add success class
        // setSuccess(password);

    // }
    // if (confirmvalue === '') {
        // add error class
        // setError(confirm, "This field cannot be blank !!!!!!");

    // } else if (passwordvalue !== confirmvalue) {
        // setError(confirm, "Dude ! Password and Confirm Password must be same.")
    // }

    // else {
        // add success class
        // setSuccess(confirm);
        // window.location.href = `signin.html`;
        // document.getElementById("username").value = ""
        // document.getElementById("email").value = ""
        // document.getElementById("password").value = ""
        // document.getElementById("confirm").value = ""
    // }
// }

// function setError(input, msg) {
    // const formControl = input.parentElement;
    // const small = formControl.querySelector("small");
    // small.innerText = msg;
    // add error class
    // formControl.className = "form-control error";
// }
// function setSuccess(input) {
    // const formControl = input.parentElement;
    // formControl.className = "form-control success";
// 
// }
// 
// function isemail(email) {
    // return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// 
// }
// 

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword                  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBX7OfAAOCigmKB17KAFM7bc3aFxgrawU",
    authDomain: "bank-app-project-one.firebaseapp.com",
    projectId: "bank-app-project-one",
    storageBucket: "bank-app-project-one.appspot.com",
    messagingSenderId: "571325333186",
    appId: "1:571325333186:web:58e6d0912c7ae119ac055b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const clicked = () => {
    let email = document.getElementById('emailO').value
    let password = document.getElementById('passwordO').value
    let identify = document.getElementById('username').value
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            user.displayName = identify
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}
window.clicked = clicked