export function fakeLogin(user: string, pass: string) {
  cy.window().then(window => {
    window.sessionStorage.setItem('session', JSON.stringify({ user, pass }));
  });
}
