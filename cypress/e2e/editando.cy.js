/// <reference types="cypress" />

describe('Testes para editar contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve editar os campos', () => {
        cy.get('input[type="text"]').type('erivelton correia')
        cy.get('input[type="email"]').type('eriveltoncorreia@teste.com')
        cy.get('input[type="tel"]').type('44 12345678')
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
    })
})