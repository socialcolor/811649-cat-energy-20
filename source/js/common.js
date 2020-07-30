var nav = document.querySelector('.nav__list');
var navToggle = document.querySelector('.nav__toggle')

navToggle.addEventListener('click', function () {
  nav.classList.toggle('nav__list--active');
});
