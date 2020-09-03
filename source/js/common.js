var nav = document.querySelector('.nav__list');
var navToggle = document.querySelector('.nav__toggle')
var navImg = document.querySelector('.nav__toggle img')
var productLink = document.querySelectorAll('.product__button');
var productLinkImg = document.querySelectorAll('.product__link-images');


navToggle.addEventListener('click', function () {
  nav.classList.toggle('nav__list--active');
  if (nav.classList.contains('nav__list--active')) {
    navToggle.classList.add('nav__icon-close');
  } else {
    navToggle.classList.remove('nav__icon-close');
    navToggle.classList.add('nav__icon-open');
  }
});

document.addEventListener('DOMContentLoaded', function(e) {
  nav.classList.remove('nav__list--no-js');
  navToggle.classList.add('nav__icon-open');

  for(var i = 0; i < productLink.length; i++) {
    productLink[i].removeAttribute('href')
    productLink[i].setAttribute('href', '#')
    productLinkImg[i].removeAttribute('href')
    productLinkImg[i].setAttribute('href', '#')
  }
});
