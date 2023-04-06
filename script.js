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

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});