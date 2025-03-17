const inuptAmigo = document.getElementById ("amigo");
const listaAmigos = []; //array para armazenar os nomes
const ulListaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById ("resultado");

//Função para adicionar amigo
function adicionarAmigo() {
    listaAmigos.push(inuptAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inuptAmigo.value}</li>`;

//Verificar se o campo está vazio
if(listaAmigos == 0){
    alert("Por favor, insira um nome");
    return;
}

//Limpar o campo de entrada
    inuptAmigo.value = "";

//Verificar se o nome já existe na lista
const nomeRepetido = listaAmigos.some((nome) =>nome.toLowerCase() ==nomeNormalizado);

//nome para minúsculas
    const nomeNormalizado = nomeAmigo.toLowerCase();

//Atualizar a lista en HTML
    atualizarLista();
}

//Função para sortear amigo
function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>O amigo secreto é: ${amigoSecreto}</li>`;

//Verificar se há amigos na lista
if (listaAmigos.length == 0) {
    alert("Não há amigos disponíveis para sortear. Adicione pelo menos um.");
    return;
}

//Função para atualizar a lista
    function atualizarLista() {

//Limpar a lista existente
        ulListaAmigos.innerHTML ="";

    listaAmigos.forEach((nome) =>{
        const li = document.createElement("li");
        li.textContent = nome;
        ulListaAmigos.appendChild(li);
    });
    }
}