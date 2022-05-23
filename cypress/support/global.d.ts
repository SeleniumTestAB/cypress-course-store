/// <reference types="cypress" />

// Alternatively you can use CommonJS syntax:
// require('./commands')

declare global {
    namespace Cypress {
      interface Chainable<Subject> {
        /**
         * Select and add product to Cart
         * @example
         * cy.selectProduct(productName, size , color)
         */
    
        getWithContains(selector: string, label: string): Chainable<Subject>;
        getVisible(selector: string): Chainable<Subject>;
        getActive(selector: string): Chainable<Subject>;
        getInteractable(selector: string): Chainable<Subject>;
      }
    }
}


export{}

