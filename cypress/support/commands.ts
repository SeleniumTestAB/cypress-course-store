
/// <reference types="cypress" />

function getWithContains(selector: string, label: string): Cypress.Chainable<any> {
    return cy.get(selector).contains(label).should("exist");
}

function getVisible(selector: string): Cypress.Chainable<any> {
    return cy.get(selector).should("be.visible");
}

function getActive(selector: string): Cypress.Chainable<any> {
    return cy.get(selector).should("be.enabled");
}

function getInteractable(selector: string): Cypress.Chainable<any> {
    return cy.getActive(selector).should("be.visible");
}

Cypress.Commands.add("getWithContains", getWithContains)
  
Cypress.Commands.add("getVisible", getVisible)
  
Cypress.Commands.add("getActive", getActive)
  
Cypress.Commands.add("getInteractable", getInteractable)
