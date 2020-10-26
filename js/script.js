const modal = document.querySelector(".search__modal");
const button = document.querySelector(".search__button-description");

button.onclick = function () {
  modal.classList.toggle("modal-open");
};
