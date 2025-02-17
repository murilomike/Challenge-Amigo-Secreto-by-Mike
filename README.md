# Challenge-Amigo-Secreto-by-Mike

## Descrição do Projeto
Este é um projeto simples de "Amigo Secreto" que permite aos usuários adicionar nomes de amigos, armazená-los e sortear um amigo secreto. A aplicação foi construída usando HTML, CSS e JavaScript.

## Funcionalidades
- Armazenar nomes digitados no campo de entrada.
- Exibir a lista de amigos adicionados.
- Sortear um amigo da lista de amigos armazenados.
- Exibir a frase "O amigo sorteado é:" juntamente com o nome sorteado.
- Exibir um alerta ao tentar adicionar um nome vazio.

## Estrutura do Código
### HTML
A estrutura HTML contém os elementos principais para a entrada dos nomes, a lista de amigos e o botão para realizar o sorteio. Os elementos mais importantes são:
- Campo de entrada (`<input>`): Onde os nomes dos amigos são digitados.
- Botão de adicionar (`<button>`): Adiciona o nome digitado à lista.
- Lista de amigos (`<ul>`): Exibe os nomes dos amigos adicionados.
- Botão de sorteio (`<button>`): Realiza o sorteio e exibe o nome sorteado.

### JavaScript
O código JavaScript contém as funções principais para a interação com o HTML e a lógica do projeto. As funções mais importantes são:
- `adicionarAmigo()`: Captura o nome digitado, verifica se não está vazio, adiciona o nome à lista e atualiza a exibição.
- `atualizarLista()`: Atualiza a lista de amigos no HTML, exibindo todos os nomes armazenados.
- `sortearAmigo()`: Realiza o sorteio de um nome aleatório da lista de amigos e exibe o resultado no HTML, acompanhado da frase "O amigo sorteado é:".

## Como Usar
1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. Digite os nomes dos seus amigos no campo de entrada e clique em "Adicionar".
4. Para realizar o sorteio, clique no botão "Sortear amigo".

## Conclusão
Este projeto simples demonstra como manipular o DOM com JavaScript para criar uma aplicação interativa. Sinta-se à vontade para expandir e melhorar a aplicação com novas funcionalidades.

