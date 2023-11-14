# Influcenter Challenge - Jean Oliveira

O desafio consiste na criação de uma dashboard para visualização, análise e interatividade dos dados.
<br>
Para corresponder a altura do desafio, a dashboard se baseia em dados de um possível e-commerce.<br><br>

## Como rodar o projeto?

Pelo projeto ter sido criado através do Vite basta instalar as dependencias atráves do comando `npm install` e iniciar o projeto pelo comando `npm start`
Para testar a aplicação basta rodar o comando `npm run test` <br><br>

## Interagindo com os dados

O projeto foi criado atráves de lista de dados fake obtida pelo site [FakeStoreAPI](https://fakestoreapi.com/), dados estes que podem ser encontrados através de arquivos JSON na pasta `data`.
<br>
<br>
Lá você irá encontrar 4 arquivos, os arquivos com sufixo "list" são utilizados para a listagem padrão, já os arquivos com o prefixo "add" são utilizados como exemplo de importação de dados (criado apenas para facilitar o teste da funcionalidade).
<br>
Fique a vontade para criar uma lista quantos items desejar, atente-se ao padrão dos arquivos e o formato JSON.
<br>
<br>
Exceto "vendas", os demais marcadores e gráficos refletem os dados reais obtidos através das listas, para criar uma interatividade nos números das vendas, foi adicionado uma funcionalidade que acionar o "Adicionar venda", é incrementado uma venda ao contador.<br><br>

## Tecnologias/Bibliotecas Utilizadas

- Estilização: TailwindCSS
- Internacionalização: React i18n
- Testes: Jest + React Testing Library
- Animação: Framer motion
- Icones: React Icons
- Toaster: React Toastify
- Tabelas: Material UI
- Gráficos: Apex Charts
- Loader: React Spinner
- Logo: Photoshop

<br>
Observação: a adição da palavra "Challenge" ao logo da Influcenter foi criada por mim apenas para aumentar a customização e caracterizar melhor a aplicação para fins visuais.
