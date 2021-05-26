const form = document.querySelector("#contactForm");
const theName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const messageSuccess = document.querySelector(".success");
const submitButton = document.querySelector("button");


function validateForm (event) {
    event.preventDefault();

    if (theName.value.trim().length > 5) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (subject.value.trim().length > 15) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (message.value.trim().length > 25) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
    
}

form.addEventListener("submit", validateForm);



function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

messageSuccess.style.display = "none";



submitButton.addEventListener("click", function () {
    if ( (theName.value.trim().length > 5) &&
        (subject.value.trim().length > 15) &&
        (validateEmail(email.value) === true) &&
        (message.value.trim().length > 25)
    )    
        messageSuccess.style.display = "block";
        messageSuccess.innerHTML = `<h3 class="buttonsuccess">I have recived your message, you should get an answer as soon as possible!</h3>`;
});