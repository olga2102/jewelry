const body = document.querySelector(".page__body");
const header = document.querySelector(".header");
const nav = document.querySelector(".main-nav");
const login = document.querySelector(".header__login");
const card = document.querySelector(".header__card");
const search = document.querySelector(".header__wrapper form");
const toggle = document.querySelector(".toggle");
const logo = document.querySelector(".logo__img");

header.classList.remove("header--bg");
nav.classList.remove('main-nav--opened');
login.classList.remove("header__login--opened");
search.classList.add("header__form--hidden");
card.classList.remove("header__card--opened");
toggle.classList.remove("toggle--open");
toggle.classList.add("toggle--close");

//переключение меню
toggle.addEventListener("click", () => {
  if (toggle.classList.contains('toggle--close')) { // меню закрыто
    body.classList.add("page__body--lock");
    header.classList.add("header--bg");
    nav.classList.add('main-nav--opened');
    login.classList.add("header__login--opened");
    search.classList.remove("header__form--hidden");
    card.classList.add("header__card--opened");
    toggle.classList.remove("toggle--close");
    toggle.classList.add("toggle--open");
    logo.style.fill = "white";
  } else if (toggle.classList.contains("toggle--open")) { // меню закрыто
        body.classList.remove("page__body--lock");
        header.classList.remove("header--bg");
        nav.classList.remove('main-nav--opened');
        nav.classList.add('main-nav--closed');
        login.classList.remove("header__login--opened");
        search.classList.add("header__form--hidden");
        card.classList.remove("header__card--opened");
        toggle.classList.remove("toggle--open");
        toggle.classList.add("toggle--close");
        logo.style.fill = "rgba(168, 123, 98, 1)";
    }
});

