const executeCommand = command => {
  cy.task('pluginExecuteCommand', command)
}

import 'cypress-waitfor'

export default executeCommand
