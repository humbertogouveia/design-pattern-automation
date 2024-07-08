/// <reference types='cypress' />

export const cadastroPage = {
    get firstName() {
        return cy.get('[data-testid="firstName"]')
    },

    get lastName() {
        return cy.get('[data-testid="lastName"]')
    },

    get phoneNumber() {
        return cy.get('[data-testid="phone"]')
    },

    get emailAddress() {
        return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]')
    },

    get password() {
        return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]')
    },

    get rePassword() {
        return cy.get('[data-testid="repassword"]')
    },

    get botaoCreate() {
        return cy.get('[data-testid="create"]')
    },

    

    cadastro({ firstName, lastName, phoneNumber, emailAddress, password, rePassword }) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.phoneNumber.type(phoneNumber)
        this.emailAddress.type(emailAddress)
        this.password.type(password)
        this.rePassword.type(rePassword)
        this.botaoCreate.click()
    }
};

module.exports = { cadastroPage };
