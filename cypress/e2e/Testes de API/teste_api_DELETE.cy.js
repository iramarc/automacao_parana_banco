const apiUrls = require('./Facilitadores/urls');

describe('Teste do verbo HTTP "DELETE"', () => {

    it('Deve testar se o verbo DELETE está funcionando e testar se recebemos o HTTP code correto', () => {
        
        cy.request('DELETE', apiUrls.apiUrlUserId1)
        //Requisita em Cypress (cy.request), que se utilize o metodo DELETE, para aquele item especifico
        //ou seja, acesse a url requisitada da pasta de facilitadores.
           .then((response) => {
            expect(response.status).to.be.equal(200);
            //então (then), depois de solicitar, o codigo esperado (expect), de status deve ser 200
            //O HTTP code 200 significa que a solicitação foi bem recebida.
           })
    })
})