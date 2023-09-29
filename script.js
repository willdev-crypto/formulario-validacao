// ---------- VALIDAÇÃO DE CAMPOS ----------
let senhaInput = document.getElementById("senha");
let confirmaSenhaInput = document.getElementById("confirma-senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

let emailInput = document.getElementById('email');
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById('email-helper');

// Função para mostrar ou ocultar popup de campo obrigatório
function toggleRequiredPopup(input, label) {
    if (input.value.trim() === "") {
        label.classList.add('required-popup');
    } else {
        label.classList.remove('required-popup');
    }
}

// Função para validar senha
function validatePassword() {
    let senhaValor = senhaInput.value;
    let confirmaSenhaValor = confirmaSenhaInput.value;

    if (senhaValor.length < 6) {
        senhaInput.classList.remove('correct');
        senhaInput.classList.add('error');
        senhaHelper.classList.add('visible');
        senhaHelper.innerText = 'A senha deve ter pelo menos 6 caracteres';
    } else {
        senhaInput.classList.remove('error');
        senhaHelper.classList.remove('visible');
        senhaInput.classList.add('correct');
    }

    if (senhaValor !== confirmaSenhaValor) {
        confirmaSenhaInput.classList.remove('correct');
        confirmaSenhaInput.classList.add('error');
        confirmaSenhaHelper.classList.add('visible');
        confirmaSenhaHelper.innerText = 'As senhas não coincidem';
    } else {
        confirmaSenhaInput.classList.remove('error');
        confirmaSenhaHelper.classList.remove('visible');
        confirmaSenhaInput.classList.add('correct');
    }
}

// Função para validar email
function validateEmail() {
    let valor = emailInput.value;
    
    if (valor.includes('@') && valor.includes('.com')) {
        emailInput.classList.remove('error');
        emailHelper.classList.remove('visible');
        emailInput.classList.add('correct');
    } else {
        emailInput.classList.add('error');
        emailHelper.classList.add('visible');
        emailInput.classList.remove('correct');
        emailHelper.innerText = 'Email inválido';
    }
}

// Adicionar eventos para senha e confirmação de senha
senhaInput.addEventListener('input', function () {
    toggleRequiredPopup(senhaInput, senhaLabel);
    validatePassword();
});

confirmaSenhaInput.addEventListener('input', function () {
    toggleRequiredPopup(confirmaSenhaInput, confirmaSenhaLabel);
    validatePassword();
});

// Adicionar eventos para validação de email
emailInput.addEventListener('focus', function () {
    emailLabel.classList.add('required-popup');
});

emailInput.addEventListener('blur', function () {
    emailLabel.classList.remove('required-popup');
});

emailInput.addEventListener('input', validateEmail);


// ---------- VALIDAÇÃO DE CAMPOS ----------
// ... Código anterior ...

let idadeInput = document.getElementById('idade');
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById('idade-helper');

// Função para validar idade
function validateAge() {
    let idadeValor = idadeInput.value.trim();

    if (idadeValor === "") {
        idadeInput.classList.add('error');
        idadeHelper.classList.add('visible');
        idadeHelper.innerText = 'Campo idade é obrigatório';
    } else {
        idadeInput.classList.remove('error');
        idadeHelper.classList.remove('visible');
    }
}

// Adicionar evento para validação de idade
idadeInput.addEventListener('input', validateAge);
