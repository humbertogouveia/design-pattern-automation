const { homePage } = require("../support/pages/home.page");

describe('Testing interceptions on Cypress', () => {

  beforeEach(() => {
    cy.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ');
  });  

  it('Given that I am a user, When I click on add to Cart my item, Then an error 500 happens', () => {
    // Define a rota de atualização do carrinho
    const updateCartRoute = '**/?wc-ajax=add_to_cart';
  
    cy.intercept('POST', updateCartRoute, (req) => {
      if (req.body.product_id) {
        req.reply({ statusCode: 500, body: { error: "Erro ao adicionar ao carrinho" } });
      }
    }).as('updateCart');
  
    // Acessa a página do produto
    cy.visit('http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/');
  
    // Aguarda a página carregar para evitar que requisições ocorram antes da interceptação
    cy.wait(2000);
  
    // Seleciona atributos do produto e adiciona ao carrinho
    cy.get('.button-variable-item-XS').click();
    cy.get('.button-variable-item-Orange').click();
    cy.get('.single_add_to_cart_button').click();
  
    // Aguarda a interceptação e valida o erro 500
    cy.wait('@updateCart').then((interception) => {
      expect(interception.response.statusCode).to.eq(500);
    });
  
    // Valida que uma mensagem de erro foi exibida na UI
    cy.contains('foi adicionado no seu carrinho.').should('not.be.visible');
  });
  

});
