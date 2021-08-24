const faqList = document.querySelector(".question__list");
const answers = document.querySelectorAll(".question__text");
const faqItems = document.querySelectorAll(".question__list li");
const faqTitles = document.querySelectorAll(".question__list h3");

answers.forEach(answer => {
  answer.classList.add("question__text--closed");
});

let toggleFaqItem = function (item) {
    item.classList.toggle('question__text--closed');
};

faqTitles.forEach(title => {
  title.addEventListener('click', function(event) {
    // debugger;
    const target = event.target;
    console.log(target);
    const text = target.nextElementSibling;
    console.log(text)
    if(text.classList.contains('question__text')) {
      answers.forEach((item, i) => {
          toggleFaqItem(item);
      });
    }
  });
})



