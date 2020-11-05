const modal = document.querySelector(".search__modal");
const form = modal.querySelector(".search__form");
const toggleModalButton = document.querySelector(".search__button-modal");
const submitButton = modal.querySelector(".modal__button");
const firstInput = form.querySelector("input");
const arrival = form.querySelector(".input-big-arrival");
const departure = form.querySelector(".input-big-departure");
const adults = form.querySelector(".search__total-adults");
const children = form.querySelector(".search__total-children");

toggleModalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstInput.focus();
  if (modal) {
    modal.classList.toggle("search__modal-close");
  }
});

submitButton.addEventListener("click", function (evt) {
  if (!form.checkValidity()) {
    evt.preventDefault();
    form.classList.add("search__modal-error");
  } else {
    localStorage.setItem("arrival", arrival.value);
    localStorage.setItem("departure", departure.value);
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);
  }
});

form.addEventListener("animationend", function () {
  form.classList.remove("search__modal-error");
});

