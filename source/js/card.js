const modalCard = document.querySelector(".modal-card");
const cardButton = document.querySelector(".card__button");
const closeButton = document.querySelector(".close-button");
const pageBody =  document.querySelector(".page__body");
const forms = document.querySelectorAll("form");

const removeClassModalCard = () => {
  modalCard.classList.remove("modal-card--opened");
  pageBody.classList.remove("page__body--lock");
}

const getAllClass = (str) => {
  const space = " ";
  return str.split(space);
}

cardButton.addEventListener("click", () => {

  modalCard.classList.add("modal-card--opened");
  pageBody.classList.add("page__body--lock");
});

closeButton.addEventListener("click", () => {
  removeClassModalCard();
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape" || evt.key === "Esc") {
    if (modalCard.classList.contains("modal-card--opened")) {
      modalCard.classList.remove("modal-card--opened");
    }
  }
});

modalCard.addEventListener("click", (evt) => {
  const allClasses = getAllClass(evt.target.className);

  const currentClass = allClasses.some(element => {
    return element === "modal-card";
  });

  if (currentClass) {
    removeClassModalCard();
  }
});
