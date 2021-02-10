class BasePage {   
   
    selectById(selectBoxId, selectText){
      return cy.get(selectBoxId).select(selectText)
    }

    typeInputValueById(inputId, value){
        return cy.get(inputId).type(value)
    }

    typeTextAreaValueById(textAreaId, value){
        return cy.get(textAreaId).type(value)
    }

    clickButtonByText(buttonText){
        return cy.xpath(`//button//*[text()= "${buttonText}"]`).click()
  }
  
  }
  
export default BasePage;
