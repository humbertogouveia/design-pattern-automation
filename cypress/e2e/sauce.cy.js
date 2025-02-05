describe('Teste com Sauce', () => {
    it('Mocka um erro 500 ao adicionar um produto ao carrinho', () => {
    cy.sai()
      // Intercepta a requisição POST para adicionar ao carrinho
      cy.intercept('POST', '/cart/add.js',{statusCode:500}).as('addError')  
      // Ação de clicar no produto
      
      cy.visit('/');
  
      cy.get('#product-1').click();
      cy.get('#add').click();
  
      // Aguarda a interceptação e valida a resposta mockada
      cy.wait('@addError').its('response.statusCode').should('be.equal', 500); // Agora usa o alias correto
    });
  });
  