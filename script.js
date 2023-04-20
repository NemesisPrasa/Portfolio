window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 20;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add('active');
    }
  }
}


function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}


const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar');
const navBarClose = document.querySelector('.closeNavbar');
const navClose = document.querySelector('.navClose');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});


const warepper = document.querySelector('.warepper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const buttonPopUp = document.querySelector('.logginPopup');
const closePopUp = document.querySelector('.icon-close');
var focuss = document.querySelector('#all');
const buttonToggle = document.querySelector('#logginPopup2');


registerLink.addEventListener('click', () => {
  warepper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  warepper.classList.remove('active');
});

buttonPopUp.addEventListener('click', () => {
  warepper.classList.add('active-popUp');
  focuss.style.opacity = 0.2;
});

closePopUp.addEventListener('click', () => {
  warepper.classList.remove('active-popUp');
  focuss.style.opacity = 1;
});

buttonToggle.addEventListener('click', () => {
  warepper.classList.add('active-popUp');
  focuss.style.opacity = 0.2;
});


