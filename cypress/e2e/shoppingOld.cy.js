describe('Teste', () => {

  beforeEach(()=>{
    cy.intercept('POST', '/carrinho/', (req) => {
      if (req.body.includes('Update Cart')) {  
        req.reply({
          statusCode: 500,
          body: { error: "Erro interno no servidor" },
        })
      } else if (req.body.includes('add')) {
        req.reply({
          statusCode: 500,
          body: { error: "Erro interno no servidor" },
        })
      }
    }).as('add_or_update_product')

    cy.intercept('GET', '/carrinho/?remove_item*', { statusCode: 500 }).as('postRemoveItem');

    cy.visit('http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/')
    cy.scrollTo('top', {duration:1000})



  })
  it('Dado que sou um usuário no carrinho de compras, quando eu adiciono mais uma unidade de um produto, Então um ero 500 ocorre, E não é somada outra unidade', () => {   
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Orange').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()

    cy.get('.plus').click()
    cy.wait('@add_or_update_product').its('response.statusCode').should('be.equal', 500)

  })

  it('Dado que sou um usuário no carrinho de compras, quando eu removo uma unidade de um produto, Então um ero 500 ocorre, E a unidade não é removida', () => {   
    cy.get('.button-variable-item-XS')
    .should('be.visible')
    .click()
    cy.get('.button-variable-item-Orange')
    .should('be.visible')
    .click()

    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()

    cy.get('.minus').click()
    cy.wait('@add_or_update_product').its('response.statusCode').should('be.equal', 500)

  })

  it('Dado que sou um usuário no carrinho de compras, quando eu removo um produto, Então um ero 500 ocorre, E o produto não é removido', () => {   
    cy.get('.button-variable-item-XS')
    .should('be.visible')
    .click()
    cy.get('.button-variable-item-Orange')
    .should('be.visible')
    .click()

    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()
    cy.get('.plus').click()


    cy.get('.remove > .fa').click()
    cy.wait('@postRemoveItem').its('response.statusCode').should('be.equal', 500)

  })

})