const { homePage } = require("../support/pages/home.page");

describe('Testando as interceptações', () => {

  beforeEach(() => {
    cy.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ');
  });  

  it('Deve existir mais que 1 categoria com resposta da fixture', () => {
    cy.intercept('GET','**/public/getCategories',{fixture:'apiWithOneCategorie.json'}).as('withOne')
    homePage.openSearchProduct()
    homePage.openCategoriesFilter()
    homePage.categories().should('have.length',1)
  });

  it('Dado que não exista categorias, Quando acesso a busca por elas, Então recebo retorno de somente 1. Que é a opção All) ', () => {
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
});
