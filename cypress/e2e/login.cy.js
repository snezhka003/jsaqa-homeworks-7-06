describe('login tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should successfully open page', () => {
    cy.contains('Books list').should('be.visible');
  });

  it('Should successfully login', () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible');
  });

  it('Should not login with empty login', () => {
    cy.login("", "123");
    cy.get('#mail').then($el=>$el[0].checkValidity()).should('be.false');
  });

  it('Should not login with empty password', () => {
    cy.login("bropet@mail.ru", "");
    cy.get('#pass').then($el=>$el[0].checkValidity()).should('be.false');
  });

  it('Should not login with incorrect login', () => {
    cy.login("test@mail.ru", "123");
    cy.get('div.text-danger').should('be.visible');
  });

  it('Should not login with incorrect password', () => {
    cy.login("bropet@mail.ru", "5487");
    cy.get('div.text-danger').should('be.visible');
  });
})