describe('Cake Recipe Planner', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('displays an alert to add a cake', () => {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub');
    });

    cy.get('[data-testid="print-shopping-list"]').click();

    cy.get('@alertStub').should('have.been.calledWith', 'You must introduce a cake first');
  });

  it('successfully submits a new cake recipe', () => {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub');
    });

    cy.get('input[type="text"]').type('Red Velvet Cake');

    cy.get('[data-testid="ingredient-quantity-0"]').type('200');
    cy.get('[data-testid="ingredient-select-0"]').select('flour');

    cy.contains('Add Cake').click();

    cy.get('@alertStub').should('have.been.calledWith', 'Cake added successfully');
  });
});
