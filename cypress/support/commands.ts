// add a custom command cy.foo()
import { fakeLogin } from './core/login.helpers';

Cypress.Commands.add('login', (user: string, pass: string) => {
  fakeLogin(user, pass);
});

// see more example of adding custom commands to Cypress TS interface
// in https://github.com/cypress-io/add-cypress-custom-command-in-typescript
// add new command to the existing Cypress interface
// tslint:disable-next-line no-namespace
declare global {
  namespace Cypress {
    // tslint:disable-next-line interface-name
    interface Chainable {
      login(user: string, pass: string): void;
    }
  }
}
