import {addHandler} from "./accordion.js";

const filter= document.querySelector(".catalog__wrapper");
const catalogLink = document.querySelector(".catalog__filter-link");
const closeButton = document.querySelector(".close-button");
const body =  document.querySelector(".page__body");
const fieldsets = document.querySelectorAll("fieldset");
const closedFieldsetCatalog = 'catalog__fieldset--closed';
const openedCatalogTitle = 'catalog__title--opened';
const form = document.querySelector(".filter");
const formFilterButton = form.querySelector('button[type="submit"]');

const addHandlerButtonSubmit = () => {
  formFilterButton.addEventListener("submit", (evt) => {
    evt.preventDefault;
  })
}

const addHadlerCatalogLink = () => {
  catalogLink.addEventListener("click", () => {

    filter.classList.add("catalog__wrapper--opened");
    body.classList.add("page__body--lock");
    closeButton.style.display = "block"
  });
}

const removeClass = () => {
  filter.classList.remove("catalog__wrapper--opened");
  body.classList.remove("page__body--lock");
}

const addHandlerCloseButton = () => {
  closeButton.addEventListener("click", (evt) => {
    evt.preventDefault;
    removeClass();
  });
}

const addHandlerCloseFilterbyEsc = () => {
  window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape" || evt.key === "Esc") {
      if (filter.classList.contains("catalog__wrapper--opened")) {
        filter.classList.remove("catalog__wrapper--opened");
      }
    }
  });
}

const Handler = (evt) => {
  addHandler(evt, fieldsets, closedFieldsetCatalog, openedCatalogTitle);
}

const changeState = () => {
  fieldsets.forEach(item => {
    item.classList.add(closedFieldsetCatalog); // add all li
    item.addEventListener('click', Handler);
  });
}

const initFilter = () => {
  if (catalogLink === null) {
    return;
  }
  addHadlerCatalogLink();
  addHandlerCloseButton();
  addHandlerCloseFilterbyEsc();
  changeState();
  addHandlerButtonSubmit();
}

initFilter();
