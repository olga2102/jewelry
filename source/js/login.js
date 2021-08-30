const modalLogin = document.querySelector(".modal");
const loginLink = document.querySelector(".header__login");
const closeModalButton = document.querySelector(".modal__close-button");
const body =  document.querySelector(".page__body");
const userEmail = document.querySelector("#email");
const forms = document.querySelectorAll("form");

const removeClass = () => {
  modalLogin.classList.remove("modal--opened");
  body.classList.remove("page__body--lock");
}

const getAllClass = (str) => {
  const space = " ";
  return str.split(space);
}

loginLink.addEventListener("click", () => {

  modalLogin.classList.add("modal--opened");
  body.classList.add("page__body--lock");
});

closeModalButton.addEventListener("click", () => {
  removeClass();
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape" || evt.key === "Esc") {
    if (modalLogin.classList.contains("modal--opened")) {
      modalLogin.classList.remove("modal--opened");
    }
  }
});

modalLogin.addEventListener("click", (evt) => {
  const allClasses = getAllClass(evt.target.className);

  const currentClass = allClasses.some(element => {
    return element === "modal";
  });

  if (currentClass) {
    removeClass();
  }
});

forms.forEach(form => {
  const email = form.querySelector('input[type=email]');

  form.addEventListener("submit", (evt) => {
    if (!email.value) {
      evt.preventDefault();
    } else {
      localStorage.setItem("email", email.value);
    }
  });
})
