let burger__toggle = document.querySelectorAll('.navigation__toggle');
let burger__menu = document.querySelector('.navigation__menu');
let header = document.querySelector('.header');
let back = document.querySelector('.page');
  burger__toggle.forEach(function (item) {
    item.onclick = function () {
      item.classList.toggle('active');
      burger__menu.classList.toggle('active');
      header.classList.toggle('active');
      back.classList.toggle('lock');
    }
  });
