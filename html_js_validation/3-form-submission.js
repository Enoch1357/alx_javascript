function handleFormSubmit(event) {
    const inputs = document.querySelectorAll('input');
    let isValid = true
    for (const input of inputs) {
        if (!input.value.trim()) {
            isValid = false;
            break;
        }
    }

    if (!isValid) {
        alert("Please fill in all required fields");
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
}

const form = document.getElementById('submitForm');
form.addEventListener("submit", handleFormSubmit);