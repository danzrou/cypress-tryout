import { setAndGetFixture } from '../../support/core/fixture.helpers';
import {
  getHeader,
  getLoginError,
  getPassField,
  getSubmitBtn,
  getUserField
} from '../../support/login/login.po';

interface UserForm {
  user: string;
  password: string;
}

describe('login', () => {
  beforeEach(() => cy.visit('login'));

  it('submit() - invalid form', () => {
    setAndGetFixture<UserForm>('login/login-invalid', 'invalidForm').then(({ user, password }) => {
      getUserField().type(user);
      getPassField().type(password);
      getSubmitBtn().click();
      getLoginError().should('contain.text', 'User or password are incorrect');
    });
  });

  it('submit() - valid form, should navigate to home', () => {
    setAndGetFixture<UserForm>('login/login-valid', 'validForm').then(({ user, password }) => {
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

    cy.get('.error')
      .eq(1)
      .should('contain.text', 'Password required');
  });

  it('header - should not be present in mobile', () => {
    cy.viewport('iphone-5');
    getHeader().should('not.be.visible');
  });

  it('header - should have font size 12px in 1366', () => {
    cy.viewport(1366, 768);
    getHeader().should('have.css', { 'font-size': '12px', color: 'blue' });
  });
});
