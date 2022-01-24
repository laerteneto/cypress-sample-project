import BasePage from '../../support/pages/basePage'

describe('Performance execution', () => {
  const basePage = new BasePage()
  const times = 3

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/')
    // cy.wait(1000) // remove comment to test the elint plugin for Cypress
  })

  Cypress._.times(times, k => {
    it(`Login positive  ${k + 1} / ${times}`, () => {
      basePage.clickElementByText('Form Authentication')
      basePage.typeInputValueById('#username', 'tomsmith')
      basePage.typeInputValueById('#password', 'SuperSecretPassword!')
      basePage.clickElementByText(' Login')
    })
  })
})
