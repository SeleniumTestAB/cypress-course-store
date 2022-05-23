import "./commands"
import "cypress-real-events/support";
// Alternatively you can use CommonJS syntax:
// require('./commands')
/// <reference types="cypress" />

export{}
Cypress.Server.defaults({
   ignore: (xhr) => true,
});
