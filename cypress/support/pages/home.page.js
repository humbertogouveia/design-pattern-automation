/// <reference types='cypress' />

export const homePage = {
    abrirMenuInformandoOpcao(menu) {
        return cy.get(`[href="/Tab/${menu}"]`).click()
    }
}