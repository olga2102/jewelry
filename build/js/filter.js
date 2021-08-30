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

if (window.innerWidth > 767) {
  closeButton.style.display = "none"
}

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
  closeButton.style.display = "none"
}

const getAllClass = (str) => {
  const space = " ";
  return str.split(space);
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
        evt.preventDefault;
        filter.classList.remove("catalog__wrapper--opened");
      }
    }
  });
}

filter.addEventListener("click", (evt) => {
  const allClasses = getAllClass(evt.target.className);

  const currentClass = allClasses.some(element => {
    return element === "catalog__wrapper";
  });

  if (currentClass) {
    evt.preventDefault;
    removeClass();
  }
});

const changeState = () => {
  fieldsets.forEach(item => {
    const handler = (evt) => {
      addHandler(evt, fieldsets, closedFieldsetCatalog, openedCatalogTitle);
    }
    item.classList.add(closedFieldsetCatalog); // add all li
    item.addEventListener('click', handler);
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
