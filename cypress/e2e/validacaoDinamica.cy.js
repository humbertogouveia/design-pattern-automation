/// <reference types="cypress" />

// Importando os arquivos JSON corretamente
import categoryData from '../fixtures/api_categories.json' // Importa todo o objeto do arquivo JSON
import dados from '../fixtures/data.json'
import { homePage } from '../support/pages/home.page.js'

describe('Testando validações dinâmicas', () => {

  // Antes de cada teste, faz login com as credenciais do JSON
  beforeEach(() => {
    cy.login(dados.email, dados.senha)  // Acessa as propriedades email e senha corretamente
  })

  // Itera sobre cada categoria presente no array de categorias dentro do JSON
  categoryData[0].categories.forEach((category) => {  // Acessa a propriedade 'categories' dentro do objeto
    it(`Validação categoria ${category.name}`, () => {
      homePage.abrirMenuInformandoOpcao('Browse')
      homePage.openCategories()
      homePage.categories().should('contain.text', category.name)  // Corrigido para 'category.name'
    })
  })

      it.only(`Deve pesquistar os produtos e ter um valor listado`, () => {
        homePage.abrirMenuInformandoOpcao('Browse')
       
      })

    })
