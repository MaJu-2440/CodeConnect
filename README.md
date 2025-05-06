![Front-end-CodeConnect](https://github.com/user-attachments/assets/38802678-22bb-40d6-b7ff-61d688758b54)

![](https://img.shields.io/github/license/alura-cursos/android-com-kotlin-personalizando-ui)

# CodeConnect - Página de Upload de Arquivos

Este projeto consiste na construção de uma página de upload de arquivos para o CodeConnect. A página possui uma interface amigável que permite aos usuários fazer upload de uma imagem de prévia do projeto e preencher um formulário com informações relevantes sobre o projeto.


## 🔨 Funcionalidades do projeto

- Upload de Imagem: Permite ao usuário carregar uma imagem do seu computador, que será exibida como prévia do projeto.
- Formulário de Projeto:
    - Campo para inserir o nome do projeto.
    - Campo para adicionar uma descrição do projeto.
    - Campo para inserir tags que ajudam na categorização do projeto.
- Ações: Botões para "Descartar" ou "Publicar" o projeto. Ao clicar em "Publicar", uma mensagem de confirmação é exibida.

![](img/amostra.gif)

## ✔️ Técnicas e tecnologias utilizadas

As técnicas e tecnologias utilizadas pra isso são:

- `Manipulação do DOM`: JavaScript para alterar dinamicamente o conteúdo da página, como atualizar a prévia da imagem quando o usuário faz o upload.
- `Eventos`: Eventos, como click e change, para capturar ações do usuário, como clicar no botão "Carregar imagem" ou preencher o formulário.
- `Validação de Formulário`: Antes de permitir que o usuário publique o projeto, podemos implementar validações para garantir que todos os campos obrigatórios estejam preenchidos corretamente.
- `Promises`: Promises para lidar com operações assíncronas, como o upload de arquivos, permitindo que o código continue executando enquanto aguarda a conclusão de uma operação.
- `Async/Await`: Para simplificar o tratamento de promises, a sintaxe async/await torna o código mais legível e fácil de entender.
- `Blocos try...catch`: Blocos try...catch para tratar erros que possam ocorrer durante operações assíncronas, garantindo que a aplicação permaneça estável.

## 🛠️ Abrir e rodar o projeto

Como usar:

- Clone o repositório para sua máquina local.
- Abra o arquivo index.html em um navegador.
- Utilize o botão "Carregar imagem" para selecionar uma imagem do seu computador.
- Preencha os campos do formulário com as informações do seu projeto.
- Clique em "Publicar" para ver a mensagem de confirmação.


## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.


