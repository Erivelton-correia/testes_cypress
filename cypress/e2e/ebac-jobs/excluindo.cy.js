/// <reference types="cypress" />

describe('Testes para excluir contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve excluir os campos', () => {
        cy.get('input[type="text"]').type('erivelton correia')
        cy.get('input[type="email"]').type('eriveltoncorreia@teste.com')
        cy.get('input[type="tel"]').type('44 12345678')
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })
})