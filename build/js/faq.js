import {addHandler} from "./accordion.js";

const faqItems = document.querySelectorAll(".question__item");
const closedItem = 'question__item--closed';
const openedFaqTitle = 'question__title--opened';

faqItems.forEach(item => {
  const handler = (evt) => {
    addHandler(evt, faqItems, closedItem, openedFaqTitle);
  }
  item.classList.add(closedItem); // add all li
  item.addEventListener('click', handler);
});
