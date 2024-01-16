import Ajv from 'ajv'; //importa Ajv da biblioteca ajv
import addformats from 'ajv-formats'; //importa addfomats da biblioteca ajv formats.
import apiUrls from './Facilitadores/urls'; //importa o caminho "apiUrl"

const ajv = new Ajv(); //determina a variavel ajv como uma nova Ajv
addformats(ajv) //importa a opção que valida formatos.

    describe('Teste JSON Schema com ajv', () => {
        it('Deve validar o JSON contra o schema', () => {
        cy.request('GET', apiUrls.apiUrlUserId1) // usa o metodo GET para pegar algo dessa url
            .its('body') //o que eu quero que pegue dessa url é nesse caso o body.
            .then(response => { //e então após pegar o body, quero que me responda com a função
            const schema = require('./Facilitadores/v_jsonSchema.json');  //determina a variavel schema com o meu schema JSON pré-determinado
            const validate = ajv.compile(schema); //compila o Schema usando 'ajv.compile' para criar uma função de validação para esse schema.
            const valid = validate(response); //usa a função de validação gerada para validar o JSON baseado no Schema informado 
    
            if (!valid) {
                throw new Error(`JSON does not match the schema. Errors: ${ajv.errorsText(validate.errors)}`);
            } 
            //se a validação falhar, vai lançar uma mensagem de erro detalhada sobre os erros de validação
            //usando a função específica da biblioteca para isso.
            });
        });
    });