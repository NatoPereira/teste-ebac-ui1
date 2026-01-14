/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {  
        cy.get('#username').type('natocastro@teste.com.br')
        cy.get('#password').type('nato123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, natocastro-3781')
    })

    it('Deve exibir mensagem de erro ao inserir usuário inválido', () => { 
        cy.get('#username').type('natocastr@teste.com.br')
        cy.get('#password').type('nato123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('natocastro@teste.com.br')
        cy.get('#password').type('nato12')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para o e-mail natocastro@teste.com.br está incorreta.')
        cy.get('.woocommerce-error > li').should('exist')
    });
})