const { email, senha } = require("../fixtures/data.json");

describe("Testes automatizados na Ebac Store", () => {
  beforeEach(() => {
    cy.login(email, senha);
  })
  
  it("CT.001 - Realizar checkout de compras com App Actions", () => {
    cy.realizarCheckout()
  })
})
