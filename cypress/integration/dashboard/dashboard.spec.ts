describe('DashboardModule', () => {
  beforeEach(() => {
    cy.login('user', '123');
    cy.visit('dashboard');
  });

  it('should have Menu button', () => {
    cy.get('button[smpButton]').should('contain', 'Dashboard Menu');
  });

  it('should open popover menu', () => {
    cy.get('button[smpButton]').click()
      .get('smp-popover').should('be.visible');
  });

  it('should have popover with "Go to Home" item', () => {
    cy.get('button[smpButton]').click()
      .get('smp-popover').should('contain', 'Go to Home');
  });

  it('should display spinner when "Go to Home" is clicked', () => {
    cy.get('button[smpButton]').click()
      .get('smp-popover').contains('Go to Home').click()
      .get('smp-spinner').should('be.visible');
  });

  it('should navigate to "/home" when "Go to Home" is clicked', () => {
    cy.get('button[smpButton]').click()
      .get('smp-popover').contains('Go to Home').click()
      .get('smp-spinner').then($smpSpinner =>
        $smpSpinner.on('remove', () => cy.url().should('contain', 'home'))
      );
  });
});
