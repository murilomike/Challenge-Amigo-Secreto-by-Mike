# Amigo Secreto (Challenge By Alura, Oracle One)

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

## Desafios Encontrados
- **Validação do Campo de Entrada**: Um dos desafios foi garantir que o campo de entrada não estivesse vazio ao adicionar um nome, para evitar nomes em branco na lista.
- **Exibição Dinâmica da Lista**: Atualizar a lista de amigos dinamicamente no HTML sempre que um novo nome fosse adicionado, sem recarregar a página.
- **Sortear um Nome Aleatório**: Implementar a lógica para sortear um nome aleatório da lista de amigos armazenados.

## Como Superei Esses Desafios
- **Validação do Campo de Entrada**: Utilizei a função `trim()` para remover espaços em branco do início e do fim do valor digitado e implementei uma condição para exibir um alerta caso o campo estivesse vazio.
- **Exibição Dinâmica da Lista**: Utilizei a função `innerHTML` para limpar e atualizar a lista de amigos sempre que um novo nome fosse adicionado.
- **Sortear um Nome Aleatório**: Utilizei a função `Math.random()` para gerar um índice aleatório e selecionar um nome da lista de amigos.

## Quais as Implementações que Achei Mais Interessante
- A implementação da validação do campo de entrada e a exibição de um alerta ao tentar adicionar um nome vazio foi uma solução simples, mas eficaz, para melhorar a experiência do usuário.
- A exibição da frase "O amigo sorteado é:" juntamente com o nome sorteado tornou a aplicação mais amigável e intuitiva para o usuário.

## Como Minha Aplicação Funciona
1. O usuário digita os nomes dos amigos no campo de entrada e clica no botão "Adicionar".
2. Os nomes são armazenados em um array e exibidos em uma lista no HTML.
3. Quando o usuário clica no botão "Sortear amigo", um nome aleatório é selecionado da lista e exibido junto com a frase "O amigo sorteado é:".

## Quais Tecnologias Estou Usando
- **HTML**: Para estruturar o layout da aplicação e criar os elementos de entrada e exibição.
- **CSS**: Para estilizar a aplicação e torná-la visualmente atraente.
- **JavaScript**: Para implementar a lógica da aplicação, incluindo a captura de nomes, atualização da lista e sorteio de amigos.

## Como Usar
1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. Digite os nomes dos seus amigos no campo de entrada e clique em "Adicionar".
4. Para realizar o sorteio, clique no botão "Sortear amigo".

## Conclusão
Este projeto simples demonstra como manipular o DOM com JavaScript para criar uma aplicação interativa. Sinta-se à vontade para expandir e melhorar a aplicação com novas funcionalidades.

