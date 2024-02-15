let email = document.getElementById('email');
let name_ = document.getElementById('name');
let password = document.getElementById('password');
let telefone = document.getElementById('number');
let form = document.querySelector('form');
// let errorname = document.getElementById('errorname')

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let namePattern = /^[a-zA-Z\s]+$/;

form.addEventListener('submit', (e) => {
    if (name_.value === "") {
        errorname.innerText = "Por favor digite seu nome"
    } else if (!namePattern.test(name_.value)) {
        errorname.innerText = "Nome inválido";
    }
    else {
        errorname.innerText = ""
    }
    if (password.value === "") {
        errorpassword.innerText = "Por favor digite sua senha"
    } else {
        errorpassword.innerText = ""
    }
    if (email.value === "") {
        erroremail.innerText = "Por favor digite seu email"
    } else if (!emailPattern.test(email.value)) {
        erroremail.innerText = "Email inválido"
    }
    else {
        erroremail.innerText = ""
    }
    if (telefone.value === "") {
        errortelefone.innerText = "Por favor digite seu telefone"
    } else {
        errortelefone.innerText = ""
    }





    e.preventDefault()
})

function validarForm() {
    if (emailPattern.test(email.value) && namePattern.test(name_.value) && telefone.value !== "" && password.value !== "") {
        sucessform.innerText = "Formulario enviado com sucesso!";

        // removendo os p//
        // let paragrafos = document.querySelectorAll('p');

        // paragrafos.forEach(function(paragrafos){
        //              paragrafos.remove();
        // });


        console.log(email.value);
        console.log(password.value);
        console.log(name_.value);
        console.log(telefone.value);
    }


}

