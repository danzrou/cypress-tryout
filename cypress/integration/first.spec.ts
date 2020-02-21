describe('app', () => {
  beforeEach(() => cy.visit('http://localhost:4200/'));

  it('works', () => {
    cy.get('.d1').should('contain', 'button');
    cy.fixture('example').then(example => console.log(example))
		cy.fixture('example').as('useExample');
    console.log(cy.get('@useExample').then(e => console.log('2', e)));
  });
});

