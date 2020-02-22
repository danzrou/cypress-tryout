import {
  getLoginError,
  getPassField,
  getSubmitBtn,
  getUserField
} from '../../support/login/login.po';

describe('login', () => {
  beforeEach(() => cy.visit('login'));

  it('submit() - invalid form', () => {
    cy.fixture('login/login-invalid').as('invalidForm');

    cy.get<{ user: string; password: string }>('@invalidForm').then(({ user, password }) => {
      getUserField().type(user);
      getPassField().type(password);
      getSubmitBtn().click();
      getLoginError().should('contain.text', 'User or password are incorrect');
    });
  });

  it('submit() - valid form, should navigate to home', () => {
    cy.fixture('login/login-valid').as('validForm');
    cy.get<{ user: string; password: string }>('@validForm').then(({ user, password }) => {
      getUserField().type(user);
      getPassField().type(password);
      getSubmitBtn().click();

      cy.url().should('contain', '/home');
    });
  });

  it('form validation - should show error when field is empty', () => {
    getUserField().type('user');
    getUserField().clear();
    cy.get('.error')
      .first()
      .should('contain.text', 'User required');

    getPassField().type('pass');
    getPassField().clear();
    getPassField().should('have.class', 'ng-invalid');

    cy.get('.error').then(el => {
      const passError = el.get()[1];
      expect(passError).to.contain('Password required');
    });
  });
});
