const modal = document.querySelector(".modal-card");
const cardButton = document.querySelector(".card__button");
const closeButton = document.querySelector(".close-button");
const body =  document.querySelector(".page__body");
const forms = document.querySelectorAll("form");

const removeClass = () => {
  modal.classList.remove("modal-card--opened");
  body.classList.remove("page__body--lock");
}

const getAllClass = (str) => {
  const space = " ";
  return str.split(space);
}

cardButton.addEventListener("click", () => {

  modal.classList.add("modal-card--opened");
  body.classList.add("page__body--lock");
});

closeButton.addEventListener("click", () => {
  removeClass();
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape" || evt.key === "Esc") {
    if (modal.classList.contains("modal--opened")) {
      modal.classList.remove("modal--opened");
    }
  }
});

modal.addEventListener("click", (evt) => {
  const allClasses = getAllClass(evt.target.className);

  const currentClass = allClasses.some(element => {
    return element === "modal-card";
  });

  if (currentClass) {
    removeClass();
  }
});
