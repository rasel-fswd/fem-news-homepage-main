const headerLink = document.querySelector('.header__link');
const menuBtn = document.querySelector('#menu');
const menuBtnClose = document.querySelector('#menu-close');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

console.log(menuBtn);

const showNavigation = () => {
  headerLink.classList.add('show');
  body.classList.add('overlay');
  menuBtnClose.classList.remove('hidden');
  menuBtn.classList.add('hidden');
};

const removeNavigation = () => {
  headerLink.classList.remove('show');
  body.classList.remove('overlay');
  menuBtn.classList.remove('hidden');
  menuBtnClose.classList.add('hidden');
};

menuBtn.addEventListener('click', showNavigation);
menuBtnClose.addEventListener('click', removeNavigation);
