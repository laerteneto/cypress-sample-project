import BasePage from '../../support/pages/basePage'

describe('Home page tests', () => {
  const page = new BasePage()

  beforeEach(() => {
    cy.visit('cypress/support/resources/test.html')
  })

  it('Should match the snapshot', () => {
    page.matchPageSnapshot()
  })

  it('Should match an element snapshot', () => {
    page.matchElementSnapshot(':nth-child(5) > a')
  })
})
