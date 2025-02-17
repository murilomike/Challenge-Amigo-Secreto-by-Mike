let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo').value; // armazenar o valor do input
    if (inputAmigo.trim() === "") { // Verificar se o valor é vazio
        alert("Você precisa digitar um nome!"); // Exibir um alerta
    } else {
        amigos.push(inputAmigo); // Adicionar o valor no array
        atualizarLista(); // Atualizar a lista de amigos
        document.getElementById('amigo').value = ""; // Limpar o campo de entrada
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos'); // Pegar a lista de amigos
    lista.innerHTML = ""; // Limpar a lista
    amigos.forEach((amigo) => { // Para cada amigo na lista
        let li = document.createElement('li'); // Criar um elemento li
        li.textContent = amigo; // Adicionar o nome do amigo no li
        lista.appendChild(li); // Adicionar o li na lista
    });
}

function sortearAmigo() {
    if (amigos.length > 0) { // Verificar se existe algum amigo na lista
        let sorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Sortear um amigo
        let resultado = document.getElementById('resultado'); // Pegar o elemento resultado
        resultado.innerHTML = `<li>O amigo sorteado é: ${sorteado}</li>`; // Adicionar a frase e o amigo sorteado no resultado
    } else {
        alert("Nenhum nome foi adicionado para sorteio!"); // Caso não tenha amigos na lista
    }
}
