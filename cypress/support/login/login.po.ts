export const getLoginForm = () => cy.get('.login-form');
export const getUserField = () => getLoginForm().get('input[name=user]');
export const getPassField = () => getLoginForm().get('input[name=password]');
export const getSubmitBtn = () => getLoginForm().get('button.submit-btn');
export const getLoginError = () => cy.get('.login-error');
