const apiUrls = require ('./Facilitadores/urls');

describe('Teste do verbo HTTP "POST"', () => {
//Aqui vamos executar o verbo POST para criar um novo id de cadastro.
    it('Deve executar um teste para o verbo POST e retornar o "HTTP Code"', ()=>{
        //O Cypress vai requisitar o metodo post na url a seguir, ou seja
        // cy.request (requisita que o cypres faça algo..) - identifica o metodo como POST
        // E a url que irá postar, que nesse caso é a pagina usuarios.
        cy.request({
            method:'POST',
            url: (apiUrls.apiUrlUsers),
            // No body, usaremos o JSON Schema disponível para preencher com dados fictícios
            body: require('./Facilitadores/body.json')
        }).then((response) =>{
            //e então (then), depois de solicitar o POST desse BODY (desse preenchimento)
            expect(response.status).to.be.equal(201)
            //esperamos (expect) que o status (response.status) seja 201,
            // Diferente do codigo 200, que significa que a solicitação foi bem recebida.
            // O codigo 201, significa que a solicitação foi bem recebida também, porém
            // criou um novo recurso, ou seja, o POST funcionou.
            }); 
    })      
})