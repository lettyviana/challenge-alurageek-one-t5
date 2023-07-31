const formulario = document.querySelector("[data-formulario-de-login]");
const email = document.querySelector("[data-email]");
const senha = document.querySelector("[data-senha]");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    checkLoginForm();
});

function checkEmail() {
    const emailInserido = email.value;
    const emailDeAcesso = "alurageek@alurageek.com";
    
    if(emailInserido === "") {
        printErrorMessage(email, "Digite o e-mail de login");
    }else if(emailInserido !== emailDeAcesso) {
        printErrorMessage(email, "E-mail incorreto");
    }
    else{
        const formField = email.parentElement;
        formField.className = "formulario__campos foco";
    }
}

function checkPassword() {
    const senhaInserida = senha.value;
    const senhaDeAcesso = "alur@Ge&k123";

    if(senhaInserida === "") {
        printErrorMessage(senha, "Digite a senha");
    }else if(senhaInserida !== senhaDeAcesso) {
        printErrorMessage(senha, "Senha incorreta");
    }
    else{
        const formField = senha.parentElement;
        formField.className = "formulario__campos foco";
    }
}

function checkLoginForm() {
    checkEmail();
    checkPassword();

    const formFields = formulario.querySelectorAll(".formulario__campos");
    const isValid = [...formFields].every((field) => {
        return field.className === "formulario__campos foco";
    });

    if(isValid) {
        window.location.assign("../pages/menu-administrador.html");
    }
}

function printErrorMessage(field, message) {
    const formField = field.parentElement;
    const errorMessage = formField.querySelector("span");
    errorMessage.innerText = message;
    formField.className = "formulario__campos foco erro";
}

// quando o campo está em foco ou preenchido
const fields = document.querySelectorAll('.escrita__email, .escrita__senha');
fields.forEach((field) => {
    field.addEventListener('focus', () => {
        field.parentNode.classList.add('foco');
    });

    field.addEventListener('blur', () => {
      if (!field.value) {
        field.parentNode.classList.remove('foco');
        checkEmail();
        checkPassword();
      }
    });
});