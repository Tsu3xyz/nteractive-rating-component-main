const numbers = document.querySelectorAll("[data-number]");
const active = document.querySelector(".active");
const selected = document.querySelector(".container__selected");
const score = document.querySelector(".score");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    selected.classList.add("active");
    score.innerText = number.innerHTML;
  });
});
