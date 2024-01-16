const botoes = require ('./elementos');  // Chama as variaveis da pagina centralizada.
const urlteste = require('./sites'); // Chama a url determinada como variavel urlteste para acessar o site.

describe('Página de teste', () => {

  it('Efetuar clique em todos os tres botões apresentados em tela', () => {
    
    cy.visit(urlteste);  //Visitar a página atraves do URL.
    
      /* Pelo motivo de: os botões mudam de forma dinâmica, é impossivel trazer algum indicador fixo como ID,
      portanto usamos "get" para buscar pela âncora "a", a referencia html "href", da classe determinada
      para o botão botão (onde cada um tem o seu).
      Chegando assim à clicar no botão independente da nomenclatura ou do ID trocado */
      cy.get(botoes.botao1).click();
      cy.get(botoes.botao2).click();
      cy.get(botoes.botao3).click();

  })
})