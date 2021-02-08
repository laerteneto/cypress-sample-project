import CommonPage from './commonPage'

const selectors = {
  searchProductInput: '#search_query_top',
  searchProductBtn: '#searchbox > .btn'
};

class HomePage extends CommonPage{
    visit() {
      cy.visit('/');
    }
    
    getMenuCategoryLink(categoryName) {
      return cy.xpath('//div[@id="block_top_menu"]//a[@title="'+ categoryName +'"]');
    }
    
    searchForProduct(productName){
      this.typeInputValueById(selectors.searchProductInput, productName)
      cy.get(selectors.searchProductBtn).click()
    }
    
  }
  
  export default HomePage;
  