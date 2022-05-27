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

let youtube = document.querySelector(".social__link--youtube");

youtube.addEventListener ("click", function(evt) {
    evt.preventDefault();
    console.log("Работает!");
  }
)

let popup = document.querySelectorAll(".popup");
let error = document.querySelector(".popup--error");
let confirm = document.querySelector(".popup--confirm");
let close = document.querySelector(".button--form");
let required = document.querySelectorAll(".required");
const form = document.getElementById("bigform");

form.addEventListener("submit", function(evt) {
  if (required.value === "") {        //условие
    error.addEventListener("submit", function(evt) {
      evt.preventDefault();
      error.classList.add(".popup-show");
    });
  } else {
    confirm.addEventListener("submit", function(evt) {
      evt.preventDefault();   //нужно ли отменять отправку, если я хочу отправить данные, но не переключаться со страницы?
      confirm.classList.add(".popup-show");
    });
  }
});

//закрытие popup
close.addEventListener("click", function(evt){
  evt.preventDefault();
  error.classList.remove("popup-show");
  confirm.classList.remove("popup-show");
});

//закрытие с клавиатуры
window.addEventListener("keydown", function(evt) {
  if (evt.key === 'Escape') {
    if(popup.classList.contains("popup-show")) {
      evt.preventDefault();
      popup.classList.remove("popup-show");
    }
  }
});
