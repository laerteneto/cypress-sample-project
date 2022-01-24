import HomePage from '../../support/pages/homePage'

describe('Home page tests', () => {
  const homePage = new HomePage()

  beforeEach(() => {
    cy.visit('http://automationpractice.com/')
  })

  it('Should display all available sections (women, dresses and t-shirts)', () => {
    homePage.getMenuCategoryLink('Women').should('be.visible')
    homePage.getMenuCategoryLink('Dresses').should('be.visible')
    homePage.getMenuCategoryLink('T-shirts').should('be.visible')
  })

  it('Search for a product (ex: Printed Chiffon Dress)', () => {
    homePage.searchForProduct('Printed Chiffon Dress')
  })
})
