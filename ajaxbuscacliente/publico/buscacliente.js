let arrayClientes = [];
let tabela;
let guardaidnomeouemail;

// mostra qaul opção foi selecionada no dropbox
function changeFunc($i) {
    guardaidnomeouemail = $i;
    return guardaidnomeouemail;
}

// deixa o campo de texto em stand by, se digitar algo ele roda 
document.getElementById("campogenerico").addEventListener("keyup", await);

// segura a execução em 2 segundos 
function await() {
    const myTimeout = setTimeout(mostraautocomplete, 2000);  
}

// mostra o autocomplete do campo texto 
function mostraautocomplete() {
    
    // armazena o que foi digitado no campo 
    var valordigitado = document.getElementById("campogenerico").value;
    listasugerida = [];
    //verifica se tem mais de 3 letras digitadas 
    if (valordigitado.length > 3){
            // busca os clientes no servidor e faz uma copia. 
            // não é uma boa tatica copiar o banco de dados para o cliente 
            // mas ainda não entendi como faz consulta no servidor 
            fetch('/users')
            .then(resposta => resposta.json())
            .then(texto => {
                arrayClientes = texto

                // verifica o que foi selecionado no dropbox e faz um array search_terms com tudo aquilo 
                //que bate com o que foi digitado no campo selecionado:
                // nao coloquei o id pq nao acho que faca sentido 

                // nome 
                if (guardaidnomeouemail == "name"){
                    arrayClientes.forEach( function(atual, index){
                    
                        const name = atual["name"];
                        
                        if (name.includes(valordigitado)){
                            listasugerida.push(
                                `<tr>                       
                                <td>${arrayClientes[index].name}</td>
                                </tr>`
                            );
                        }
                    });
                    document.querySelector("#tblistasugerida tbody").innerHTML = listasugerida.join("");
                
                
                    // email
                }else if (guardaidnomeouemail == "email"){
                    arrayClientes.forEach( function(atual, index){
                    
                        const email = atual["email"];
                        
                        if (email.includes(valordigitado)){
                            listasugerida.push(
                                `<tr>                       
                                <td>${arrayClientes[index].email}</td>
                                </tr>`
                            );
                        }
                    });
                    document.querySelector("#tblistasugerida tbody").innerHTML = listasugerida.join("");
                }
            })
    }
}


// essa funcao eh chamada pelo botao buscar e chama as funcoes correspondetes
// a opçao selecionada no dropbox
function executar(){
    if (guardaidnomeouemail == "id"){
        carregarid();
    }else if (guardaidnomeouemail == "name"){
        carregarcliente();
    }else if (guardaidnomeouemail == "email"){
        carregaremail();
    }  
}


// realiza a busca por nome
function carregarcliente() {
    fetch('/users')
    // mais uma vez eu pego o banco de dados e trago para o cliente
    // devo fazer ao contrario quando aprender 
        .then(resposta => resposta.json())
        .then(texto => {
            arrayClientes = texto
            tabela = [];
            // zera a mensagem de erro 
            document.getElementById("mensagemerro").innerHTML = "";

            // pega o valor digitado 
            let comparativo = document.getElementById("campogenerico").value;

            const field = "name";

            // compara com o banco de dados o calor digitado e poe numa tabela os matchs
            arrayClientes.forEach( function(cliente, index) {
                const name = cliente["name"];
                if (name.includes(comparativo)){
                    tabela.push(`<tr>
                    <td>${arrayClientes[index].id}</td>
                    <td>${arrayClientes[index].name}</td>
                    <td>${arrayClientes[index].email}</td>
                    </tr>`);
                }
            });

            // se encontrar algo mostra a tabela senao mostra mensagem de erro 
            if (tabela == "") {
                document.getElementById("mensagemerro").innerHTML = "Não encontrado: " + comparativo;
            }else{
                document.querySelector("#tblista tbody").innerHTML = tabela.join("");
            }
        })
}       

// realiza a busca por id 
function carregarid() {
     // mais uma vez eu pego o banco de dados e trago para o cliente
    // devo fazer ao contrario quando aprender 
    fetch('/users')
        .then(resposta => resposta.json())
        .then(texto => {
            arrayClientes = texto
            tabela = [];
            // zera a mensagem de erro 
            document.getElementById("mensagemerro").innerHTML = "";

            // pega o valor digitado 
            let comparativo = document.getElementById("campogenerico").value;
            
             const field = "id";

             // compara com o banco de dados o calor digitado e poe numa tabela os matchs
             arrayClientes.forEach( function(cliente, index) {
                 const id = cliente["id"];
                 if (id == comparativo){
                     tabela.push(`<tr>
                     <td>${arrayClientes[index].id}</td>
                     <td>${arrayClientes[index].name}</td>
                     <td>${arrayClientes[index].email}</td>
                     </tr>`);
                 }
            });

             // se encontrar algo mostra a tabela senao mostra mensagem de erro 
            if (tabela == "") {
                document.getElementById("mensagemerro").innerHTML = "Não encontrado: " + comparativo;
            }else{
                 document.querySelector("#tblista tbody").innerHTML = tabela.join("");
            }
        })
}       

// realiza a busca por email 
function carregaremail() {
     // mais uma vez eu pego o banco de dados e trago para o cliente
    // devo fazer ao contrario quando aprender 
    fetch('/users')
        .then(resposta => resposta.json())
        .then(texto => {
            arrayClientes = texto
            tabela = []
            // zera a mensagem de erro 
            document.getElementById("mensagemerro").innerHTML = "";
         
            // pega o valor digitado 
            let comparativo = document.getElementById("campogenerico").value;
            const field = "email";

            // compara com o banco de dados o calor digitado e poe numa tabela os matchs
            arrayClientes.forEach( function(cliente, index) {
                const email = cliente["email"];
                if (email.includes(comparativo)){
                    tabela.push(`<tr>
                    <td>${arrayClientes[index].id}</td>
                    <td>${arrayClientes[index].name}</td>
                    <td>${arrayClientes[index].email}</td>
                    </tr>`);
                }
            });

             // se encontrar algo mostra a tabela senao mostra mensagem de erro 
            if (tabela == "") {
                document.getElementById("mensagemerro").innerHTML = "Não encontrado: " + comparativo;
            }else{
                document.querySelector("#tblista tbody").innerHTML = tabela.join("");
            }
        })
}       