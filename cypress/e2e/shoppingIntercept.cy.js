import ShoppingPage from "../support/pages/shopping.page"

describe('Atividade Módulo 23', () => {

  beforeEach(()=>{
    cy.addAndUpdateErrorIntercept()
    cy.removeProductErrorIntercept()
  })
  it('Dado que sou um usuário no carrinho de compras, quando eu adiciono mais uma unidade de um produto, Então um ero 500 ocorre, E não é somada outra unidade', () => {   
    ShoppingPage.adicionarProdutoNoCarrinho('XS','Orange')
    ShoppingPage.acessarProdutosNoCarrinho()
    ShoppingPage.adicionarOutraUnidadeDoProdutoNoCarrinho()

    cy.wait('@add_or_update_product').its('response.statusCode').should('be.equal', 500)

  })

  it('Dado que sou um usuário no carrinho de compras, quando eu removo uma unidade de um produto, Então um ero 500 ocorre, E a unidade não é removida', () => {   
    ShoppingPage.adicionarProdutoNoCarrinho('XS','Orange')
    ShoppingPage.acessarProdutosNoCarrinho()
    ShoppingPage.adicionarOutraUnidadeDoProdutoNoCarrinho()
    ShoppingPage.reduzirUnidadeDoProdutoNoCarrinho()

    cy.wait('@add_or_update_product').its('response.statusCode').should('be.equal', 500)

  })

  it('Dado que sou um usuário no carrinho de compras, quando eu removo um produto, Então um ero 500 ocorre, E o produto não é removido', () => {   
    ShoppingPage.adicionarProdutoNoCarrinho('XS','Orange')
    ShoppingPage.acessarProdutosNoCarrinho()
    ShoppingPage.adicionarOutraUnidadeDoProdutoNoCarrinho()
    ShoppingPage.removerProdutoDoCarrinho()

    cy.wait('@postRemoveItem').its('response.statusCode').should('be.equal', 500)

  })

})