const filter= document.querySelector(".catalog__wrapper");
const catalogLink = document.querySelector(".catalog__filter-link");
const closeButton = document.querySelector(".close-button");
const body =  document.querySelector(".page__body");
const filters = document.querySelectorAll(".catalog__wrapper fieldset");
const tools = document.querySelectorAll(".catalog__wrapper li");


const removeClass = () => {
  filter.classList.remove("catalog__wrapper--opened");
  body.classList.remove("page__body--lock");
}

catalogLink.addEventListener("click", () => {

  filter.classList.add("catalog__wrapper--opened");
  body.classList.add("page__body--lock");
  closeButton.style.display = "block"
});

closeButton.addEventListener("click", () => {
  removeClass();
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape" || evt.key === "Esc") {
    if (filter.classList.contains("catalog__wrapper--opened")) {
      filter.classList.remove("catalog__wrapper--opened");
    }
  }
});

const getAllClass = (str) => {
  const space = " ";
  return str.split(space);
}

filter.addEventListener("click", (evt) => {
  const allClasses = getAllClass(evt.target.className);

  const currentClass = allClasses.some(element => {
    return element === ".catalog__wrapper";
  });

  if (currentClass) {
    removeClass();
  }
});


// const addHandler = (evt) => {
//   console.log(evt.currentTarget);
//   if(evt.currentTarget.style.display === "none") {
//     evt.currentTarget.style.display === "block";
//   } else {
//     evt.currentTarget.style.display === "none";
//   }
// }


//   faqItems.forEach(item => {
//     if (!item.classList.contains("question__item--closed")) {
//       item.classList.add("question__item--closed");
//       evt.currentTarget.classList.remove("question__item--closed");
//       item.firstElementChild.classList.remove("question__title--opened");
//       evt.currentTarget.firstElementChild.classList.add("question__title--opened");
//     }
//   });
// };


filters.forEach(item => {
  tools.forEach(tool => {
    tool.style.display = "none";
    item.addEventListener('click', (evt)=> {
      console.log(evt.currentTarget);
    if(evt.currentTarget.style.display === "none") {
      evt.currentTarget.style.display === "block";
    } else {
      evt.currentTarget.style.display === "none";
    }
    });
  })

});
