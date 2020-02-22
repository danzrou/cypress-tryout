import { getDialog, getDialogBtn, getSelect } from '../../support/home/home.po';

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
      getDialogBtn().first().click();
      getDialog().should('be.visible');
    });

    it('should have defined name', () => {
      getDialogBtn()
        .eq(0)
        .invoke('text')
        .then(text => {
          const name = (text as any).split(' ')[1];
          getDialogBtn()
            .first()
            .click();
          getDialog().get('.name').should('contain.text', `Hello ${name}`);
        });
    });
  });
});
