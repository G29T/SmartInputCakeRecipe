describe('ShoppingList Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('renders shopping list items', () => {

        cy.get('input[placeholder="Cake Name"]').type('Red Velvet Cake');
        cy.get('input[placeholder="Ingredients: [5] * [egg] + [5g] * [jam]"]').type('[5] * [egg] + [1] * [vanilla pod] ');
        cy.get('[data-testid="add-cake"]').click();


        cy.get('[data-testid="print-shopping-list"]').click();
        cy.contains('Shopping List').should('be.visible');
        cy.contains('egg').should('be.visible');
        cy.contains('5').should('be.visible');
        cy.contains('vanilla pod').should('be.visible');
        cy.contains('1').should('be.visible');
    });
});
