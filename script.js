document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('registrationForm');
    const sucessmessage = document.getElementById('sucessmessage');

    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let hasSubmitted = false; 

    // making a helper function 
    function displaymessage(element, message) {
        if(hasSubmitted){
            element.textContent = message; 
        }
        else if(message === "")
        {
            element.textContent = ""
        }


    }

    function validiateForm() {

        let isValid = true;  // boolean flag set to true initially 


        //cheking name
        let nameValue = nameInput.value.trim();

        if (nameValue === "") {

            displaymessage(nameError, "Name is required");
            isValid = false;
        }
        else if (nameValue.length < 3) {
            displaymessage(nameError, "Name must be at least 3 characters")
            isValid = false;
        }
        else {
            displaymessage(nameError, ""); // clear error
        }

        //email validation 

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


        // password validation 

        let passwordValue = passwordInput.value.trim();

        if (passwordValue === "") {
            displaymessage(passwordError, "Password is required");
            isValid = false;

        }
        else if (passwordValue.length < 6) {
            displaymessage(passwordError, "password must be greater than 6 characters");
            isValid = false;
        }
        else {
            displaymessage(passwordError, "");
        }


         return isValid;
    }


    form.addEventListener('submit', (event) => {
         
        sucessmessage.textContent = ""; 

        hasSubmitted = true; 

        const formIsValid = validiateForm(); 

       if(formIsValid) {

           event.preventDefault(); 
           sucessmessage.textContent = "✅Registration Sucessful"; 
       }
       else {
        event.preventDefault(); 
        sucessmessage.textContent = ""; 
       }
    });


    function handleInputValidiation(){
        if(hasSubmitted){
            validiateForm(); 
        }
        else {
            nameError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";
        }
    }

    //input event trigger valiadation on every change

    nameInput.addEventListener('input',handleInputValidiation); 
    emailInput.addEventListener('input',handleInputValidiation); 
    passwordInput.addEventListener('input',handleInputValidiation); 



});