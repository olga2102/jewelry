const faqList = document.querySelector(".question__list");
const answers = document.querySelectorAll(".question__text");
const faqItems = document.querySelectorAll(".question__item");
const faqTitles = document.querySelectorAll(".question__list h3");

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

// let toggleFaqItem = function (item) {
//     item.classList.toggle('question__text--closed');
// };

// faqTitles.forEach(title => {
//   title.addEventListener('click', function(event) {
//     // debugger;
//     const target = event.target;
//     console.log(target);
//     const text = target.nextElementSibling;
//     console.log(text)
//     if(text.classList.contains('question__text')) {
//       answers.forEach((item, i) => {
//           toggleFaqItem(item);
//       });
//     }
//   });
// })

