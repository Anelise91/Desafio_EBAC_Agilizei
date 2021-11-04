describe('Devfinance', () => {
    it('Adicionar entrada', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Produto1')
        cy.get('#amount').type('20')
        cy.get('#date').type('2021-11-03')
        cy.get('button').click()

    });
    it('Excluir entrada', () => {
        cy.get(':nth-child(4) > img').click()
    });
    
});
