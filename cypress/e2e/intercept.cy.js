const { homePage } = require("../support/pages/home.page");

describe('Testing interceptions on Cypress', () => {

  beforeEach(() => {
    cy.login('humbertogouveia@outlook.com', 'teste12345');
  });  

  it('categories should have one has a answer', () => {
    cy.intercept('GET','**/public/getCategories',{fixture:'apiWithOneCategorie.json'}).as('withOne')
    homePage.openSearchProduct()
    homePage.openCategoriesFilter()
    homePage.categories().should('have.length',1)
  });

  it('categories should be empty', () => {
    cy.intercept('GET','**/public/getCategories',{fixture:'apiWithoutcategories.json'}).as('withoutCategories')
    homePage.openSearchProduct()
    homePage.openCategoriesFilter()
    homePage.categories().should('have.length',1)
  });

  it('categories should be empty with error 500', () => {
    cy.intercept('GET','**/public/getCategories',{statusCode:500}).as('noServerResponse')
    homePage.openSearchProduct()
    homePage.openCategoriesFilter()
    homePage.categories().should('have.length',1)
  });

  it.only('categories should be visible', () => {
    cy.intercept('GET','**/public/getCategories',{fixture: 'categories.json'}).as('categories')
    // homePage.openSearchProduct()
    // homePage.openCategoriesFilter()
    // homePage.categories().should('have.length',7)
  });
});
