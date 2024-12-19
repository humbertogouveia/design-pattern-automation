/// <reference types="cypress" />

import categoryData from '../fixtures/api_categories.json'
import dados from '../fixtures/data.json'
import { homePage } from '../support/pages/home.page.js'

describe('Testando validações dinâmicas', () => {

  beforeEach(() => {
    cy.login(dados.email, dados.senha)
  })

  categoryData[0].categories.forEach((category) => { 
    it(`Validação categoria ${category.name}`, () => {
      homePage.abrirMenuInformandoOpcao('Browse')
      homePage.openCategories()
      homePage.categories().should('contain.text', category.name)
    })
  })

      it.only(`Deve pesquistar os produtos e ter um valor listado`, () => {
        homePage.abrirMenuInformandoOpcao('Browse')
       
      })

    })
