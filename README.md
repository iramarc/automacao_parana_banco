# Automação de Testes com Cypress

Este repositório contém a automação de testes para uma aplicação web fictícia, realizada como parte de um exercício prático. O foco do exercício foi utilizar o framework Cypress para automatizar diferentes cenários, incluindo interações com elementos da página e validações de API.

## Fases do Exercício

### Primeira Fase

#### Parte 1
Na primeira parte da primeira fase, o objetivo era automatizar a abertura de um site e clicar em três botões dinâmicos. Isso envolveu a navegação na aplicação e interação com elementos que podem mudar dinamicamente.

#### Parte 2
Na segunda parte da primeira fase, a tarefa era abrir o mesmo site e clicar em 10 botões de "edit" e 10 botões de "delete" em linhas diferentes. Isso testou a capacidade de interagir com elementos específicos em várias instâncias.

### Segunda Fase

Na segunda fase, os objetivos foram mais avançados, envolvendo validação de verbos HTTP, HTTP codes e JSON Schema para uma API endpoint fornecida pela empresa que nos testou.

- **Validação dos Verbos HTTP:** Os testes foram implementados para garantir que os quatro verbos HTTP (GET, POST, PUT, DELETE) estivessem sendo corretamente utilizados nas operações da API.

- **Validação dos HTTP Codes:** Foi feita a validação dos códigos de status HTTP retornados pela API em diferentes cenários. Isso incluiu verificar se as respostas estavam de acordo com as expectativas.

- **Validação do JSON Schema com Ajv:** Utilizando a biblioteca Ajv, foi implementada a validação do JSON da API endpoint em relação a um JSON Schema. O uso de `addformats` da Ajv contribuiu para uma validação mais detalhada e precisa.

## Como Executar os Testes

1. Clone o repositório: `git clone //github.com/iramarc/automacao_parana_banco.git`
2. Instale as dependências: `npm install`
3. Instale as dependências: `npm install ajv`
4. instale as dependências: `npm install cypress --save-dev`
5. Execute os testes: `npx cypress run` ou `npx cypress open`

## Autor

- [Marcelo Andrade](https://github.com/iramarc)

