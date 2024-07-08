const { homePage } = require("../support/pages/home.page")
const { loginPage } = require("../support/pages/login.page")
const { cadastroPage } = require("../support/pages/cadastro.page")
const { faker } = require("@faker-js/faker")
const { profilePage } = require("../support/pages/profile.page")

describe("Testes automatizados na Ebac Store", () => {
  beforeEach(() => {
    cy.setCookie("ebacStoreVersion", "v2", {
      domain: "lojaebac.ebaconline.art.br",
    })
    cy.visit("/")
  })

  it("CT.001 - Realizar cadastro de usuário com dados aleatórios utilizando Page Object", () => {
    const password = faker.internet.password()
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    homePage.abrirMenuInformandoOpcao("Account")
    loginPage.acessarCadastro()
    cadastroPage.cadastro({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: faker.phone.number(),
      emailAddress: faker.internet.email(),
      password: password,
      rePassword: password,
    })

    homePage.abrirMenuInformandoOpcao("Account")
    profilePage.customerName().should("contain", `${lastName} ${firstName}`)
  })
})
