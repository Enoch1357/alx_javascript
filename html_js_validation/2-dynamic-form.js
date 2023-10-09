#!/usr/bin/node
const numFieldsSelect = document.getElementById("numFields");
const inputContainer = document.getElementById("inputContainer");
const option0 = document.getElementById('option0');
option0.style.display = 'none';

function generateInputFields(numFields) {
    for (let i = 1; i <= numFields; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.name = `field${i}`;
        input.placeholder = `Field ${i}`;
        inputContainer.appendChild(input);
    }
}

numFieldsSelect.addEventListener("change", function () {
    const selectedValue = parseInt(numFieldsSelect.value);
    generateInputFields(selectedValue);
});

function validateForm(event) {
    const inputs = inputContainer.querySelectorAll("input");
    let isValid = true;

    for (const input of inputs) {
        if (!input.value.trim()) {
            isValid = false;
            break;
        }
    }

    if (!isValid) {
        alert("Please fill in all fields");
        event.preventDefault();
    }
}

const dynamicForm = document.getElementById("dynamicForm");
dynamicForm.addEventListener("submit", validateForm);