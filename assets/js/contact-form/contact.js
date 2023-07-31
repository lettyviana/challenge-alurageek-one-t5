const contactForm = document.querySelector("[data-formulario-de-contato]");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    checkContactForm();
});

function checkName() {
    const nameField = document.querySelector("[data-nome]");
    const nameValue = nameField.value;
    const inputLength = nameField.value.length;
    const minLength = 2;
    const maxLength = 50;

    if(nameValue === "") {
        printContactErrorMessage(nameField, "Digite seu nome.");
    }else if(inputLength < minLength) {
        printContactErrorMessage(nameField, "Use no mínimo 2 caracteres.");
    }else if(inputLength > maxLength){
        printContactErrorMessage(nameField, "Use no máximo 50 caracteres.");
    }else{
        const formField = nameField.parentElement;
        formField.className = "formulario__contato--campos foco";
    }
}

function checkMessage() {
    const messageField = document.querySelector("[data-mensagem]");
    const messageValue = messageField.value;
    const inputLength = messageField.value.length;
    const minLength = 2;
    const maxLength = 300;

    if(messageValue === "") {
        printContactErrorMessage(messageField, "Digite uma mensagem.");
    }else if(inputLength < minLength) {
        printContactErrorMessage(messageField, "Use no mínimo 2 caracteres.");
    }else if(inputLength > maxLength) {
        printContactErrorMessage(messageField, "Use no máximo 300 caracteres.");
    }else{
        const formField = messageField.parentElement;
        formField.className = "formulario__contato--campos foco";
    }
}

function printContactErrorMessage(field, message) {
    const formField = field.parentElement;
    const errorMessage = formField.querySelector("span");
    errorMessage.innerText = message;
    formField.className = "formulario__contato--campos foco erro";
}

function checkContactForm() {
    checkName();
    checkMessage();

    const contactFormFields = contactForm.querySelectorAll(".formulario__contato--campos");
    const isValid = [...contactFormFields].every((field) => {
        return field.className === "formulario__contato--campos foco";
    });

    if(isValid) {
        alert("Mensagem enviada!");
        window.location.reload();
    }
}

const formFields = document.querySelectorAll('.escrita__nome, .escrita__mensagem');
formFields.forEach((field) => {
    field.addEventListener('focus', () => {
        field.parentNode.classList.add('foco');
    });

    field.addEventListener('blur', () => {
      if (!field.value) {
        field.parentNode.classList.remove('foco');
      }
    });
});