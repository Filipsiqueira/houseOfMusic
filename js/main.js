const formContainer = document.querySelector("form");
const msgCongrats = document.querySelector(".msg-congrats");
console.log(msgCongrats);
formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  removeForm();
});

const removeForm = () => {
  formContainer.classList.add("hide");
  msgCongrats.classList.toggle("hide");
};
