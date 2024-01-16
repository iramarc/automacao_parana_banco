const apiUrls = require ('./Facilitadores/urls');

describe('Teste do verbo HTTP "GET"', () => {
    it('Deve executar um teste para o verbo GET e retornar o "HTTP Code"', ()=>{
        cy.request('GET', apiUrls.apiUrlUserId1) 
        // Cypress solicita que acesse nessa URL o cadastro de "id" 1  (Que é um cadastro existente) 
            .then((response) => { 
            // e aqui pede, "se conseguir acessar, então vamos buscar a resposta"
                expect(response.status).to.be.equal(200); 
                // a resposta esperada (expect) é o status (response.status) 200, que significa sucesso na busca
                //O HTTP code 200 significa literalmente "A solicitação foi bem recebida."
            })            
    })
})