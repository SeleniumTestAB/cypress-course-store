/// <reference types="Cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("getExisting", $selector => {
    return cy.get($selector).should('exist')
})

Cypress.Commands.add("getExisting", ($selector, label) => {
    return cy.get($selector).contains(label).should('exist')
})

Cypress.Commands.add("getVisible", $selector => {
    return cy.getExisting($selector).should('be.visible')
})

Cypress.Commands.add("getVisible", ($selector, label) => {
    return cy.getExisting($selector, label).should('be.visible')
})

Cypress.Commands.add("getActive", $selector => {
    return cy.getExisting($selector).should('be.enabled')
})

Cypress.Commands.add("getActive", ($selector, label) => {
    return cy.getExisting($selector, label).should('be.enabled')
})

Cypress.Commands.add("getInteractable", $selector => {
    return cy.getActive($selector).should('be.visible')
})

Cypress.Commands.add("getInteractable", ($selector, label) => {
    return cy.getActive($selector, label).should('be.visible')
})
