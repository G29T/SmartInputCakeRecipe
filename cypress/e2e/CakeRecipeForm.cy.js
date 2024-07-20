describe('CakeRecipeForm Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('renders form inputs and button', () => {
        cy.get('input[placeholder="Cake Name"]').should('be.visible');
        cy.get('input[placeholder="Ingredients: [5] * [egg] + [5g] * [jam]"]').should('be.visible');
        cy.get('[data-testid="add-cake"]').should('be.visible');
    });

    it('displays an alert to add a cake', () => {
        cy.window().then((win) => {
          cy.stub(win, 'alert').as('alertStub');
        });
    
        cy.get('[data-testid="print-shopping-list"]').click();
    
        cy.get('@alertStub').should('have.been.calledWith', 'You must introduce a cake first');
      });

    it('handles form submission', () => {

        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
          });

        cy.get('input[placeholder="Cake Name"]').type('Red Velvet Cake');
        cy.get('input[placeholder="Ingredients: [5] * [egg] + [5g] * [jam]"]').type('[5] * [egg] + [1] * [vanilla pod] ');
        cy.get('[data-testid="add-cake"]').click();
        
        cy.get('@alertStub').should('have.been.calledWith', 'Cake added successfully');
        cy.contains('Red Velvet Cake').should('be.visible');
    });
});
