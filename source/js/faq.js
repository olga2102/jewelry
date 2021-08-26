const faqItems = document.querySelectorAll(".question__item");

const addHandler = (evt) => {
  if(!evt.currentTarget.classList.contains("question__item--closed")) { // re-closure
    evt.currentTarget.classList.add("question__item--closed");
    evt.currentTarget.firstElementChild.classList.remove("question__title--opened");
  } else { // show text
    evt.currentTarget.classList.remove("question__item--closed");
    evt.currentTarget.firstElementChild.classList.add("question__title--opened");
  }


  faqItems.forEach(item => {
    if (!item.classList.contains("question__item--closed")) {
      item.classList.add("question__item--closed");
      evt.currentTarget.classList.remove("question__item--closed");
      item.firstElementChild.classList.remove("question__title--opened");
      evt.currentTarget.firstElementChild.classList.add("question__title--opened");
    }
  });
};


faqItems.forEach(item => {
  item.classList.add("question__item--closed"); // add all li
  item.addEventListener('click', addHandler);
});

