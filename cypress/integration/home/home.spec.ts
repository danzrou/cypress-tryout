import { getDialog, getDialogBtn, getDialogGreeting, getSelect } from '../../support/home/home.po';

describe('home', () => {
  beforeEach(() => cy.visit('home'));

  describe('select', () => {
    it('should open menu', () => {
      getSelect().click();
      cy.root()
        .get('.simp-select__content')
        .should('be.visible');
    });

    it('should select first value', () => {
      getSelect().click();
      cy.root()
        .get('.simp-select__content')
        .within(() => {
          cy.get('smp-select-option')
            .first()
            .click();
        });

      cy.get('pre').should('contain.text', '1');
    });
  });

  describe('dialog', () => {
    it('should open', () => {
      getDialogBtn()
        .first()
        .click();
      getDialog().should('be.visible');
    });

    it('should have defined name', () => {
      getDialogBtn()
        .eq(1)
        .invoke('text')
        .then(text => {
          const name = (text as any).split(' ')[1];
          getDialogBtn()
            .eq(1)
            .click();

          getDialogGreeting()
            .should('contain.text', `Hello ${name}`)
            .should('have.class', 'name');
        });
    });

    it('should close after click ok', () => {
      getDialogBtn()
        .first()
        .click();
      getDialog().should('be.visible');
      getDialog().within(() => cy.contains('Ok').click());
      getDialog().should('not.be.visible');
    });
  });
});
