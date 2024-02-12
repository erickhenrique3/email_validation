let email = document.getElementById('email');
let name_ = document.getElementById('name');
let password = document.getElementById('password');
let telefone = document.getElementById('number');
let form = document.querySelector('form');
const paragrafos = document.querySelectorAll('p')

// let errorname = document.getElementById('errorname')


form.addEventListener('submit', (e) => {
    if (name_.value === "") {
        errorname.innerText = "Por favor digite seu nome"
    }
    if (password.value === "") {
        errorpassword.innerText = "Por favor digite sua senha"
    }
    if (email.value === "") {
        erroremail.innerText = "Por favor digite seu email"
    }
    if (telefone.value === "") {
        errortelefone.innerText = "Por favor digite seu telefone"
    }


    if (email.value == true && telefone.value == true && password.value == true &&
        name_.value == true) {
        sucessform.innerText = "Formulario enviado"
    }


    e.preventDefault()
})

function validarForm() {
    if (email.value !== "" && name_.value !== "" && telefone.value !== "" && password.value !== "") {
        sucessform.innerText = "Formulario enviado com sucesso!";
        // paragrafos.style.display = "none";


        console.log(email.value);
        console.log(password.value);
        console.log(name_.value);
        console.log(telefone.value);
    }
}