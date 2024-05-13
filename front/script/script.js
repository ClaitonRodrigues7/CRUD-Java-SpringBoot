const apiUrl = "http://localhost:8080/pessoa/pessoas";




const mostraCadastros = () =>{
    fetch(apiUrl)
        .then(response => response.json())
        .then(data =>{
            const tabelaCorpo = document.querySelector(".tbody")
            data.forEach(prod => {
                const tr = document.createElement('tr');

                tr.innerHTML = `
                <td class="${prod.codigo}">${prod.codigo}</td>
                    <td>${prod.nome}</td>
                    <td>${prod.email}</td>
                    <td>${prod.idade}</td>
                    <td><a class="btn btn-primary" href="#" id="${prod.codigo}" role="button">Editar</a></td>
                    <td><a class="btn btn-danger" href="#" id="${prod.codigo}" role="button">Excluir</a></td>
                `;
                tabelaCorpo.appendChild(tr);
                
                
            });
        })
        .catch(error => console.log('Erro ao obter dados da API:', error));
    }
    
   

    
    mostraCadastros();