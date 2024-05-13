const apiUrl = "http://localhost:8080/pessoa/pessoas";

const btn = document.querySelector('.btn');
const inputNome = document.querySelector('.inputNome');
const inputEmail = document.querySelector('.inputEmail');
const inputIdade = document.querySelector('.inputIdade');

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    if (inputNome.value == '' || inputEmail.value == '' || inputIdade.value == '') {
        alert("Campo(s) não preenchidos, por favor preencha!")
        return;
    }
    cadastraPessoa();
    limpaInput();
    
})

function limpaInput(){
    inputNome.value = '';
    inputEmail.value = '';
    inputIdade.value = '';
}

const cadastraPessoa = () =>{
    const nome = inputNome.value;
    const email = inputEmail.value;
    const idade = inputIdade.value;

    fetch(apiUrl,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            idade: idade
        })
    })
    .then(function (res) { console.log(res)})
    .catch(function (res) { console.log(res)})

}