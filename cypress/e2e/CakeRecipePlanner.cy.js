describe('CakeRecipePlanner Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('renders components correctly', () => {
        cy.get('[data-testid="print-shopping-list"]').should('be.visible');
        cy.get('input[placeholder="Cake Name"]').should('be.visible');
    });

    it('handles print shopping list button click', () => {
        cy.get('[data-testid="print-shopping-list"]').click();
        cy.contains('Shopping List').should('be.visible');
    });
});
