const btnExcluir = document.querySelector('.btn btn-danger');
const inputPesquisa = document.querySelector('#search');
const btnPesquisa = document.querySelector('#btnPesquisa')
//const idDePesquisa = inputPesquisa.value;



    document.addEventListener("click", (e)=>{
        const elClicado = e.target;
     
        if (elClicado.classList.value == "btn btn-danger") {
            const id = Number(elClicado.id);
            delataPessoa(id);
            window.location.reload(true);
        }

        if (elClicado.classList.value == "btn btn-primary") {
            const idElemento = Number(elClicado.id);
            localStorage.setItem('idElemento', idElemento);
           window.location.replace("../editar/index.html");

           
        }
        
        if (elClicado == btnPesquisa) {
            
            const idDePesquisa = Number(inputPesquisa.value);
            pesquisar();
           }
        

        
    });


const delataPessoa = (id) =>{
    fetch(`http://localhost:8080/pessoa/pessoas/${id}`,{
        method: 'DELETE',
        headers: {
        "Content-Type": "application/json"
    }
    
})
.then(function (res) { console.log(res)})
.catch(function (res) { console.log(res)})
}

const pesquisar = () =>{
    const codigo = Number(inputPesquisa.value);
    fetch(`http://localhost:8080/pessoa/pessoas/${codigo}`)
        .then(response => response.json())
        .then(data =>{
            const tabelaCorpo = document.querySelector(".tbody")
           
           
            const tr = document.createElement('tr');
          

                tabelaCorpo.innerHTML = "";
                
                
                tr.innerHTML = `
                <td class="${data.codigo}">${data.codigo}</td>
                <td>${data.nome}</td>
                <td>${data.email}</td>
                <td>${data.idade}</td>
                <td><a class="btn btn-primary" href="#"  role="button">Editar</a></td>
                <td><a class="btn btn-danger" href="#" role="button">Excluir</a></td>
                `;
                tabelaCorpo.appendChild(tr);
            
                
                
         
        })
        .catch(error => console.log('Erro ao obter dados da API:', error));
}