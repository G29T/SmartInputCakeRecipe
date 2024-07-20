describe('CakeHistory Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('renders cake history with cakes', () => {

        cy.get('input[placeholder="Cake Name"]').type('Red Velvet Cake');
        cy.get('input[placeholder="Ingredients: [5] * [egg] + [5g] * [jam]"]').type('[5] * [egg] + [1] * [vanilla pod] ');
        cy.get('[data-testid="add-cake"]').click();

        cy.get('input[placeholder="Cake Name"]').type('Vanilla Cake');
        cy.get('input[placeholder="Ingredients: [5] * [egg] + [5g] * [jam]"]').type('[100ml] * [milk] + [1] * [vanilla pod] ');
        cy.get('[data-testid="add-cake"]').click();


        cy.contains('Cake History').should('be.visible');

        cy.contains('Red Velvet Cake').should('be.visible');
        cy.contains('Vanilla Cake').should('be.visible');
    });


});
