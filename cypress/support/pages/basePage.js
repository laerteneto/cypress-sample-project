class BasePage {   

  matchPageSnapshot() {
    cy.document().toMatchImageSnapshot({
      imageConfig: {
        createDiffImage: true, // Should a "diff image" be created, can be disabled for performance
        threshold: 0.1, // Amount in pixels or percentage before snapshot image is invalid
        thresholdType: "percent", // Can be either "pixel" or "percent",
        resizeDevicePixelRatio: false // Resize image to base resolution when Cypress is running on high DPI screen, `cypress run` always runs on base resolution
      },
      separator: " ", // Naming resulting image file with a custom separator rather than using the default ` #`
    });
  }
   
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
