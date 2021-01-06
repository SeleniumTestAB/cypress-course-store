/// <reference types="Cypress" />
declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Select and add product to Cart
       * @example
       * cy.selectProduct(productName, size , color)
       */
      getExisting(selector: String): Chainable<any>
      getExisting(selector: String, label: String): Chainable<any>
      getVisible(selector: String): Chainable<any>
      getVisible(selector: String, label: String): Chainable<any>
      getActive(selector: String): Chainable<any>
      getActive(selector: String, label: String): Chainable<any>
      getInteractable(selector: String): Chainable<any>
      getInteractable(selector: String, label: String): Chainable<any>
    }
  }