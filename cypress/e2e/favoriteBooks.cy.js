describe('favorite books tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login("bropet@mail.ru", "123");
  });

  it('Should successfully adding a book to favorites during creation', () => {
    let title = 'Book '+ Date.now();

    cy.addBook(title, "test123", "test author", "1");
    cy.contains('Favorites').click();
    cy.contains(title).should('be.visible');
  });

  it('Should successfully adding a book to favorites after creation', () => {
    let title = 'Book '+ Date.now();
    
    cy.addBook(title, "1475test", "test tests author", "");
    cy.contains(title).should('be.visible');
    cy.contains('Add to favorite').click();
    cy.contains('Favorites').click();
    cy.contains(title).should('be.visible');
  });

  it('Should successfully deleted a book from favorites', () => {
    let title = 'Book '+ Date.now();
    
    cy.addBook(title, "1475test", "test tests author", "1");
    cy.contains('Favorites').click();
    cy.contains('Delete from favorite').click();
    cy.contains(title).should('not.exist');
  });
})