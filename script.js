const form = document.getElementById("emailForm");
const inputs = form.querySelectorAll("input[type='email']");
const errorMsgs = form.querySelectorAll(".error-msg");

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

form.addEventListener("submit", function (e) {
  let isValid = true;

  inputs.forEach((input, index) => {
    const email = input.value.trim();
    if (!isValidEmail(email)) {
      errorMsgs[index].textContent = "Email inválido.";
      isValid = false;
    } else {
      errorMsgs[index].textContent = "";
    }
  });

  if (!isValid) {
    e.preventDefault();
  } else {
    alert("Watch Party iniciada com sucesso!");
  }
});
