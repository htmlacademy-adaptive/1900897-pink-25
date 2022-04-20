let burger__toggle = document.querySelectorAll('.navigation__toggle');
let burger__menu = document.querySelector('navigation__container');
let back = document.querySelector('body');

  burger__toggle.forEach(function (item) {
    item.onclick = function () {
      item.classList.toggle('active');
      burger__menu.classList.toggle('active');
      back.classList.toggle('lock');
    }
  });
