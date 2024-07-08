// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { faker } from "@faker-js/faker"
import { cadastroPage } from "./pages/cadastro.page"
import { homePage } from "./pages/home.page"
import { loginPage } from "./pages/login.page"
import { profilePage } from "./pages/profile.page"

Cypress.Commands.add('cadastrarUsuarioAleatorio', () => { 

    const password = faker.internet.password()
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    homePage.abrirMenuInformandoOpcao('Account')
    loginPage.acessarCadastro()
    cadastroPage.cadastro({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: faker.phone.number(),
      emailAddress: faker.internet.email(),
      password: password,
      rePassword: password
    })

    homePage.abrirMenuInformandoOpcao('Account')
    profilePage.customerName().should('contain',`${lastName} ${firstName}`)
    
 })
 
 Cypress.Commands.add('login', (email, senha) => { 
     cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
     cy.visit('/');
     homePage.abrirMenuInformandoOpcao('Account')
     loginPage.login(email, senha);
  })

  Cypress.Commands.add('preencherDadosDeNovoEnderecoComDadosAleatorios', () => { 
    cy.get('[data-testid="addNewAddress"]').click()
    cy.get('input[placeholder="Enter your name"]').type(faker.person.firstName())
    cy.get('input[placeholder="Enter your mobile number"]').type(faker.number.int())
    cy.get('input[placeholder="Enter your address"]').type(faker.location.streetAddress())
    cy.get('input[placeholder="City"]').type(faker.location.country())
    cy.get('input[placeholder="State"]').type(faker.location.state())
    cy.get('input[placeholder="ZipCode"]').type(faker.location.zipCode())
    cy.get('[data-testid="save"]').click()
    cy.get('[data-testid="selectAddressOrContinueToPayment"]').click()

})

  Cypress.Commands.add('realizarCheckout', (email, senha) => { 
    homePage.abrirMenuInformandoOpcao('Browse')
    cy.contains('Ingrid Running Jacket').click({force:true})
    cy.get('[data-testid="addToCart"]').click()
    cy.get('[data-testid="selectAddressOrContinueToPayment"]').click()
    cy.get('[data-testid="completeCheckout"]').click()
    cy.contains('Order Success').should('be.visible')
    cy.get('[data-testid="goBackHome"]').should('be.visible')
 })