export const setAndGetFixture = <T>(path: string, alias: string): Cypress.Chainable<T> => {
  cy.fixture(path).as(alias);
  return cy.get<T>(`@${alias}`);
};
