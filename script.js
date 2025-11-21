document.addEventListener('DOMContentLoaded', function () {

    // grabbing all the important elements once the DOM is ready
    const form = document.getElementById('registrationForm');
    const sucessmessage = document.getElementById('successMessage');

    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');

    // simple regex to check basic email structure
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // flag to track whether the form was submitted at least once
    let hasSubmitted = false;

    // controls what message shows under each field
    function displaymessage(element, message) {
        // after first submit, always show the message
        if (hasSubmitted) {
            element.textContent = message;
        }
        // before first submit, only clear messages
        else if (message === "") {
            element.textContent = "";
        }
    }

    // runs full validation on all fields
    function validiateForm() {

        let isValid = true;

        // name check
        let nameValue = nameInput.value.trim();

        if (nameValue === "") {
            displaymessage(nameError, "Name is required");
            isValid = false;
        }
        else if (nameValue.length < 3) {
            displaymessage(nameError, "Name must be at least 3 characters");
            isValid = false;
        }
        else {
            displaymessage(nameError, "");
        }

        // email check
        let emailValue = emailInput.value.trim();

        if (emailValue === "") {
            displaymessage(emailError, "Email is required");
            isValid = false;
        }
        else if (!emailRegex.test(emailValue)) {
            displaymessage(emailError, "Please enter the valid email");
            isValid = false;
        }
        else {
            displaymessage(emailError, "");
        }

        // password check
        let passwordValue = passwordInput.value.trim();

        if (passwordValue === "") {
            displaymessage(passwordError, "Password is required");
            isValid = false;
        }
        else if (passwordValue.length < 6) {
            displaymessage(passwordError, "Password must be greater than 6 characters");
            isValid = false;
        }
        else {
            displaymessage(passwordError, "");
        }

        return isValid;
    }

    // runs when the form is submitted
    form.addEventListener('submit', (event) => {

        sucessmessage.textContent = "";
        hasSubmitted = true;

        const formIsValid = validiateForm();

        // if everything is valid, show success message
        if (formIsValid) {
            event.preventDefault();
            sucessmessage.textContent = "✅Registration Sucessful";
        }
        // if not valid, stop submission and clear success text
        else {
            event.preventDefault();
            sucessmessage.textContent = "";
        }
    });

    // handles real-time validation only after first submit
    function handleInputValidiation() {
        if (hasSubmitted) {
            validiateForm();
        } else {
            // before first submit, hide all error messages
            nameError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";
        }
    }

    // input events for live updates
    nameInput.addEventListener('input', handleInputValidiation);
    emailInput.addEventListener('input', handleInputValidiation);
    passwordInput.addEventListener('input', handleInputValidiation);

});
