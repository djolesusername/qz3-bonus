const $firstname = document.getElementById("first-name");
const $lastname = document.getElementById("last-name");
const $email = document.getElementById("email");
const $password = document.getElementById("psw");
const $form = document.getElementById("sign-up-form");

//const $error = document.getElementById('error-message')

const errorMessagePrefix = {
  psw: "Password ",
  "first-name": "First Name ",
  "last-name": "Last Name",
  email: "Email ",
};

function onInvalidForm(e) {
  let target_error = e.target.nextElementSibling;
  e.preventDefault();

  //since we are checking only email validity at the moment only thing that has data and can be invalid is email
  if (e.originalTarget?.value && e.target.id === "email") {
    target_error.innerHTML = "Looks like this is not an email";
    target_error.classList.add("hasError");
    e.target.classList.add("inputHasError");
    e.target.parentElement.classList.add("inputHasErrorDiv");
    return;
  }

  //Empty required fields check up
  if (!e.originalTarget?.value) {
    let errorMessage = `${errorMessagePrefix[e.target.id]} cannot be empty `;
    target_error.innerHTML = errorMessage;
    target_error.classList.add("hasError");
    e.target.classList.add("inputHasError");
    e.target.parentElement.classList.add("inputHasErrorDiv");
  }
}

function clearErrors(e) {
  e.originalTarget?.nextElementSibling.classList.remove("hasError");
  e.target.classList.remove("inputHasError");
  e.target.parentElement.classList.remove("inputHasErrorDiv");
}

$firstname.addEventListener("input", clearErrors);
$lastname.addEventListener("input", clearErrors);
$password.addEventListener("input", clearErrors);
$email.addEventListener("input", clearErrors);

$firstname.addEventListener("invalid", onInvalidForm);
$lastname.addEventListener("invalid", onInvalidForm);
$email.addEventListener("invalid", onInvalidForm);
$password.addEventListener("invalid", onInvalidForm);
