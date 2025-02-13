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

const { homePage } = require("./pages/home.page");
const {loginPage} = require("../support/pages/login.page");

Cypress.Commands.add('login', (email, senha) => { 
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
    cy.visit('/');
    homePage.openMenu('Account')
    loginPage.login(email, senha);
 })

 Cypress.Commands.add('loginOld', (email, senha) => { 
    cy.visit('http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/');
 })


 Cypress.Commands.add('sai',()=>{
   Cypress.on('uncaught:exception', (err, runnable) => {
      // Verifica se o erro contém a mensagem específica e o ignora
      if (err.message.includes("Cannot read properties of null (reading 'description')")) {
        return false; // Retorna `false` para evitar falha do teste
      }
    });
 })

 Cypress.Commands.add('addAndUpdateErrorIntercept',()=>{
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
 })

 Cypress.Commands.add('removeProductErrorIntercept',()=>{

   cy.intercept('GET', '/carrinho/?remove_item*', { statusCode: 500 }).as('postRemoveItem');

   cy.visit('http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/')
   cy.scrollTo('top', {duration:1000})

 })

 