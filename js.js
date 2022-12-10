const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
const exit = document.querySelector('.logo-photo');
const exit2 = document.querySelector('.nav__list');


menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});

exit.addEventListener('click', () => {
  navbar.classList.remove('change');
});

exit2.addEventListener('click', () => {
  navbar.classList.remove('change');
});