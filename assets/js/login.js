
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import { getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.2/firestore.js";

  
  document.addEventListener('DOMContentLoaded', () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAeq53gOM71XjrYhYC0yKCU1_9AxIFMjKA",
    authDomain: "bestek-8311b.firebaseapp.com",
    projectId: "bestek-8311b",
    storageBucket: "bestek-8311b.appspot.com",
    messagingSenderId: "379989274318",
    appId: "1:379989274318:web:a8b2db06b523e47c98aa9f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  const loginForm = document.querySelector('.login__form');
  const signUpLink = document.querySelector('.login__signup a');
  const forgotPasswordLink = document.querySelector('.login__forgot');
  const loginMessage = document.getElementById('login-message');
  

  function showMessage(message, type) {
    loginMessage.textContent = message;
    loginMessage.className = `login__message ${type}`; // type: success or error
    loginMessage.style.display = 'block';
    setTimeout(() => {
        loginMessage.style.display = 'none';
    }, 5000); // Hide message after 5 seconds
}

// Sign Up functionality
signUpLink.addEventListener('click', (e) => {
    e.preventDefault();

    const email = prompt('Enter your email:');
    const password = prompt('Enter your password:');

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            console.log('User signed up:', userCredential.user);
            showMessage('Account created successfully!', 'success');
            // Save additional user data to Firestore if needed
            db.collection('users').doc(userCredential.user.uid).set({
                email: email,
                // Add other user info here
            });
        })
        .catch((error) => {
            console.error('Error signing up:', error);
            showMessage(error.message, 'error');
        });
});



// Log In functionality
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-pass').value;


    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            console.log('User logged in:', userCredential.user);
            showMessage('Successfully logged in!', 'success');
            // Redirect or show logged-in state
        })
        .catch((error) => {
            console.error('Error logging in:', error);
            showMessage(error.message, 'error');
        });
});


// Forgot Password functionality
forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();

    const email = prompt('Enter your email to reset password:');

    sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log('Password reset email sent');
            showMessage('Password reset email sent!', 'success');
        })
        .catch((error) => {
            console.error('Error sending password reset email:', error);
            showMessage(error.message, 'error');
        });
});


/*=============== LOGIN ===============*/

const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')



/* LOGIN show */
if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

/* LOGIN hidden */
if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

});
