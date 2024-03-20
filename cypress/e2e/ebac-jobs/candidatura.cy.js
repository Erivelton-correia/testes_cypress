/// <reference types="cypress" />

describe('Testes para a pagina de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher o forulario de inscricao', () => {
        cy.get('input[type="text"]').type('erivelton correia')
        cy.get('input[type="email"]').type('eriveltoncorreia@teste.com')
        cy.get('input[type="tel"]').type('44 12345678')
        cy.get('.adicionar').click()

        it('Deve excluir e editar o contato', () => {
            cy.get(':nth-child(2) > .sc-gueYoa > .delete')
        })

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
            cy.get(':nth-child(2) > .sc-gueYoa > .edit')
        })

        cy.screenshot('tela-inscricao-preenchido')
    })
})