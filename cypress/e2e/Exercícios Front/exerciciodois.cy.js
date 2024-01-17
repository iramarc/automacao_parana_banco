const botoes = require("./elementos");
const urlteste = require("./sites"); // Variavel de chamada do site urlteste

const tabelaficticia = 'div[class="large-10 columns"]'; // variavel usada apenas no exercicio dois
const corpodatabela = '<tbody>';


describe('Teste de Automatização', () => {
    it('Deve clicar nos botões "Edit" e "Delete" em cada linha da tabela', () => {
      cy.visit(urlteste); //requisitando a abertura do website através do URL

      /*1º A seguir buscamos pela divisão (div) da classe determinada para a tabela
      para encontrar onde estão os elementos.

      2º Usamos o "each($div)" para repetir sobre todos os elementos encontrados pelo get determinado
      e referenciar cada "div" correspondente como "$div"

      3º Em seguida, vamos pegar todos os correspondentes "$div" que encontrar e empacotar em um elemento
      cypress através do "wrap" e usar "within" para criar um contexto limitado para os comandos cypress apenas
      dentro desse bloco e os comandos dentro do bloco serão utilizados APENAS nos elementos que
      forem descentendes do item "$div" */

        cy.get(tabelaficticia).each(($div) => { 
            cy.wrap($div).within(() => {})
                    })

                cy.get(corpodatabela).each(($linha) => {
                    cy.wrap($linha).get(botoes.botaoedit).click({multiple: true}) ;
                    cy.wrap($linha).get(botoes.botaodelete).click({multiple: true});

                    /* 
                    1º Usamos o "get (corpo da tabela) para pegar a tabela atraves da variavel e usamos 
                    "each($linha)" para repetir sobre todos os elementos encontrados pelo get a atribuição de referencia $linha para esses elementos
                    
                    2º Empacotamos com "wrap" todos os correspondentes de "$linha" em um elemento cypress
                    e usamos get para pegar a referencia "#edit" de cada correspondente (ou seja, tudo que
                      tiver #edit na linha, vai ser chamado) e depois usamos o .click() para clicar
                      Porém, isso daria erro, porque iria chamar uma vez, e depois o programa ficaria
                      confuso, pois no site tem mais de uma vez, então usamos o {multiple:true} para
                      indicar que o teste pode usar essa linha de comando mais de uma vez, como uma autorização.
                    
                      3º Repete o que foi feito em "edit", mudando o comando para realizar em "delete".
                    */
        });
      });
    });
  
