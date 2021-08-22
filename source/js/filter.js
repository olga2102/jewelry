const filter= document.querySelector(".catalog__wrapper");
const catalogLink = document.querySelector(".catalog__filter-link");
const closeButton = document.querySelector(".close-button");
const body =  document.querySelector(".page__body");
// const forms = document.querySelectorAll("form");
console.log(closeButton);

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
