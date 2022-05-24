let burgerToggle = document.querySelectorAll('.navigation__toggle');
let burgerMenu = document.querySelector('.navigation__menu');
let header = document.querySelector('.header');
let back = document.querySelector('.page');
let map = document.querySelector('.contact__map');

header.classList.remove('nojs');
burgerToggle.forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('navigation__toggle--active');
    burgerMenu.classList.toggle('menu--active');
    header.classList.toggle('header--active');
    back.classList.toggle('page--menu');
  })
});

map.classList.remove('nojs');
