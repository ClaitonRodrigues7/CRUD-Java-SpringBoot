const btn = document.querySelector('.btn');
const inputNome = document.querySelector('.inputNome');
const inputEmail = document.querySelector('.inputEmail');
const inputIdade = document.querySelector('.inputIdade');

const id = localStorage.getItem('idElemento')
console.log(id);
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    if (inputNome.value == '' || inputEmail.value == '' || inputIdade.value == '') {
        alert("Campo(s) não preenchidos, por favor preencha!")
        return;
    }
    editarCadastro(id);
    window.location.replace("../tabela/index.html");
    
})

function limpaInput(){
    inputNome.value = '';
    inputEmail.value = '';
    inputIdade.value = '';
}

const editarCadastro = (idElemento) =>{
    
    console.log("O id e " + idElemento);
    const nome = inputNome.value;
    const email = inputEmail.value;
    const idade = inputIdade.value;
    const newData = {
        codigo: idElemento,
        nome: nome,
        email: email,
        idade: idade
    }
    
    fetch(`http://localhost:8080/pessoa/pessoas`,{
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newData)
    })
    .then(function (res) { console.log(res)})
    .catch(function (res) { console.log(res)})

}
