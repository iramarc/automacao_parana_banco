const apiUrls = require('./Facilitadores/urls');

describe('Teste do verbo HTTP "PUT"',() =>{
    
    it('Deve testar na página de usuários, o verbo PUT, para alterar o preenchimento',() =>{
        
        cy.request ({
            method: 'PUT',
            url: (apiUrls.apiUrlUserId1),
            body: require('./Facilitadores/body.json')
        //Requisita ao Cypress (cy.request), utilizar o verbo "PUT", para atualizar
        //o preenchimento na url de usuarios com id 1 com
        //a informação representada no body.

        }) .then((response) =>{
            expect(response.status).to.be.equal(200)
            //então (then), apos atualizar, a resposta esperada em código HTTP (response.status)
            //deverá ser 200, ou seja, "A solicitaçao foi bem recebida".
            });
    })
})