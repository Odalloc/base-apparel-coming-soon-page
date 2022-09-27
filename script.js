const form = document.querySelector(".main-content form");
const email = document.querySelector("#email");
const errorIcon = document.querySelector(".error-icon");
const errorMsg = document.querySelector(".error-message");

const validEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value === "") {
    form.classList.add("form-error");
    errorIcon.style.display = "block";
    errorMsg.innerHTML = "Please enter your email";
  } else if (!email.value.match(validEmail)) {
    form.classList.add("form-error");
    errorIcon.style.display = "block";
    errorMsg.innerHTML = "Please provide a valid email";
  } else {
    form.classList.remove("form-error");
    errorIcon.style.display = "none";
    errorMsg.innerHTML = "";
  }
});
