export const getLoginForm = () => cy.get('.login-form');
export const getUserField = () => getLoginForm().within(() => cy.get('input[name=user]'));
export const getPassField = () => getLoginForm().within(() => cy.get('input[name=password]'));
export const getSubmitBtn = () => getLoginForm().within(() => cy.get('button.submit-btn'));
export const getLoginError = () => cy.get('.login-error');
export const getHeader = () => cy.get('h3.login-header');
