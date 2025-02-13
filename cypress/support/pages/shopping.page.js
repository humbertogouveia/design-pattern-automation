/// <reference types='cypress' />

class ShoppingPage {
    static adicionarProdutoNoCarrinho(tamanho, cor) {
        cy.get(`.button-variable-item-${tamanho}`)
            .should('be.visible')
            .click()
            .then(() => {
                cy.log(`Tamanho ${tamanho} selecionado.`);
            });

        cy.get(`.button-variable-item-${cor}`)
            .should('be.visible')
            .click()
            .then(() => {
                cy.log(`Cor ${cor} selecionada.`);
            });

        cy.get('.single_add_to_cart_button')
            .should('be.visible')
            .click()
            .then(() => {
                cy.log('Produto adicionado ao carrinho.');
            });
    }

    static acessarProdutosNoCarrinho() {
        cy.get('.woocommerce-message > .button')
            .should('be.visible')
            .and('contain', 'Ver carrinho')
            .click()
            .then(() => {
                cy.log('Carrinho acessado.');
            });
    }

    static adicionarOutraUnidadeDoProdutoNoCarrinho(){
        cy.get('.plus')
        .should('be.visible')
        .click()
 
    }

    static reduzirUnidadeDoProdutoNoCarrinho(){
        cy.get('.minus')
        .should('be.visible')
        .click()
 
    }

    static removerProdutoDoCarrinho() {
        cy.get('.remove > .fa')
        .should('be.visible')
        .click()
    }
}

export default ShoppingPage;