const botoes = require ('./elementos');  // Chama as variaveis da pagina centralizada.
const urlteste = require('./sites'); // Chama a url determinada como variavel urlteste para acessar o site.

describe('Página de teste', () => {

  it('Efetuar clique em todos os tres botões apresentados em tela', () => {
    
    cy.visit(urlteste);  //Visitar a página atraves do URL.
    
      /* Pelos botões mudarem de forma dinâmica é impossivel trazer algum indicador fixo como ID,
      portanto usei a lógica de criar uma pasta (elementos.js), onde dentro dela usei o seguinte:
      "get" para buscar pela âncora "a", a referencia html "class", onde cada botão tem a sua classe,
      sendo assim, cada botão se torna independente mesmo alterando os elementos Dinâmicos */
    
      cy.get(botoes.botao1).click();
      cy.get(botoes.botao2).click();
      cy.get(botoes.botao3).click();

  })
})
