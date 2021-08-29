import {addHandler} from "./accordion.js";

const faqItems = document.querySelectorAll(".question__item");
const closedItem = 'question__item--closed';
const openedFaqTitle = 'question__title--opened';

const Handler = (evt) => {
  addHandler(evt, faqItems, closedItem, openedFaqTitle);
}

faqItems.forEach(item => {
  item.classList.add(closedItem); // add all li
  item.addEventListener('click', Handler);
});
