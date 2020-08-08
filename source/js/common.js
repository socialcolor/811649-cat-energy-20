var nav = document.querySelector('.nav__list');
var navToggle = document.querySelector('.nav__toggle')
var navImg = document.querySelector('.nav__toggle img')

navToggle.addEventListener('click', function () {
  nav.classList.toggle('nav__list--active');
  if (nav.classList.contains('nav__list--active')) {
    navImg.setAttribute('src', 'img/icon-close.svg');
  } else {
    navImg.setAttribute('src', 'img/icon-mobile-menu.svg');
  }
});
