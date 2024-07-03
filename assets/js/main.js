/*=============== SEARCH ===============*/


const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/* SEARCH show */
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/* SEARCH hidden */
if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}
/*=============== LOGIN ===============*/

// const loginButton = document.getElementById('login-button'),
//       loginClose = document.getElementById('login-close'),
//       loginContent = document.getElementById('login-content')

// /* LOGIN show */
// if(loginButton){
//     loginButton.addEventListener('click', () =>{
//         loginContent.classList.add('show-login')
//     })
// }

// /* LOGIN hidden */
// if(loginClose){
//     loginClose.addEventListener('click', () =>{
//         loginContent.classList.remove('show-login')
//     })
// }

/*=============== ADD SHADOW HEADER ===============*/

const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints:{
        1220: {
            spaceBetween: -32,

        }
    }
  });

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints:{
        1150: {
            slidesPerView: 4,
            centeredSlides: false,

        }
    }
  });

/*=============== NEW SWIPER ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__data, .featured__container, .footer')
sr.reveal('.home__images', {delay: 600})
sr.reveal('.services__card', {interval: 100})
sr.reveal('.discount__data', {origin: 'left'})
sr.reveal('.discount__img', {origin: 'right'})
sr.reveal('.join__data', {origin: 'left'})
sr.reveal('.join__img', {origin: 'right'})
sr.reveal('.founder1__data', {origin: 'left'})
sr.reveal('.founder1__img', {origin: 'right'})
sr.reveal('.founder2__data', {origin: 'left'})
sr.reveal('.founder2__img', {origin: 'right'})


// FIREBASE AUTHENTICATION

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import {getFirestore, doc, setDoc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
  
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
  // Initialize Firebase Authentication and Firestore
const auth = firebase.auth();
const db = firebase.firestore();

const loginForm = document.querySelector('.login__form');
const signUpLink = document.querySelector('.login__signup a');
const forgotPasswordLink = document.querySelector('.login__forgot');
const loginMessage = document.getElementById('login-message');

  const loginButton = document.getElementById('login-button'),
        loginClose = document.getElementById('login-close'),
        loginContent = document.getElementById('login-content')


        // Log In functionality
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-pass').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            console.log('User logged in:', userCredential.user);
            // Redirect or show logged-in state
        })
        .catch((error) => {
            console.error('Error logging in:', error);
        });
});

// Sign Up functionality
signUpLink.addEventListener('click', (e) => {
    e.preventDefault();

    const email = prompt('Enter your email:');
    const password = prompt('Enter your password:');

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up 
            console.log('User signed up:', userCredential.user);
            // Save additional user data to Firestore if needed
            db.collection('users').doc(userCredential.user.uid).set({
                email: email,
                // Add other user info here
            });
        })
        .catch((error) => {
            console.error('Error signing up:', error);
        });
});

// Forgot Password functionality
forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();

    const email = prompt('Enter your email to reset password:');

    auth.sendPasswordResetEmail(email)
        .then(() => {
            console.log('Password reset email sent');
        })
        .catch((error) => {
            console.error('Error sending password reset email:', error);
        });
});

    

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

