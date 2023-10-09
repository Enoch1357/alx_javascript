#!/usr/bin/node
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const errorElement = document.getElementById('error');

emailForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value;
    const isValid = validateEmail(email);

    if (isValid) {
        errorElement.textContent = ""
        emailForm.submit(); 
    } else {
        errorElement.textContent = "Please enter a valid email address.";
    }
});

function validateEmail(email) {
    const regEx = /[a-zA-Z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,4}$/
    return regEx.test(email);
}