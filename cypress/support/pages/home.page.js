/// <reference types='cypress' />

export const homePage = {
   
    openMenu(menu){
        return cy.get(`[href="/Tab/${menu}"]`).click()
    },

    openSearchProduct() {
        return cy.get('[data-testid="search-products"]').click()    
    },

    openCategoriesFilter(){
        return cy.get(`[data-testid="Category"]`).click()
    },

    sortBy() {
        return cy.get('[data-testid="SortBy"]')
    },

    categories() {
        return cy.get('[data-testid^="search-category-"]')
    }
}