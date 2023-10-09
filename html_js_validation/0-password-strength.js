#!/usr/bin/node
document.addEventListener("DOMContentLoaded", function () {
  const passwordForm = document.getElementById("passwordForm");
  const passwordInput = document.getElementById("password");
  const errorElement = document.getElementById("error");

  passwordForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const password = passwordInput.value;
    const isValid = validatePassword(password);

    if (isValid) {
      errorElement.textContent = "";
      // If password is valid, submit the form
      passwordForm.submit();
    } else {
      errorElement.textContent =
        "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one numeric digit, and one special character.";
    }
  });

  function validatePassword(password) {
    const Regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return Regex.test(password);
  }
});
