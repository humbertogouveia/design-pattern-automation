/// <reference types='cypress' />

export const loginPage = {
    get email() {
        return cy.get('[data-testid="email"]')
    },

    get senha() {
        return cy.get('[data-testid="password"]')
    },

    get botaoLogin() {
        return cy.get('[data-testid="btnLogin"]')
    },

    get linkTextSignUp() {
        return cy.get('[data-testid="signUp"]')
    },

    acessarCadastro() {
        this.linkTextSignUp.click();
    },

    login(email, password) {
        this.email.type(email);
        this.senha.type(password);
        this.botaoLogin.click();
    }
};

// Se estiver usando CommonJS:
module.exports = { loginPage };
