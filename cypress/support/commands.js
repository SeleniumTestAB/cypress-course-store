"use strict";
/// <reference types="cypress" />
function getWithContains(selector, label) {
    return cy.get(selector).contains(label).should("exist");
}
function getVisible(selector) {
    return cy.get(selector).should("be.visible");
}
function getActive(selector) {
    return cy.get(selector).should("be.enabled");
}
function getInteractable(selector) {
    return cy.getActive(selector).should("be.visible");
}
Cypress.Commands.add("getWithContains", getWithContains);
Cypress.Commands.add("getVisible", getVisible);
Cypress.Commands.add("getActive", getActive);
Cypress.Commands.add("getInteractable", getInteractable);
