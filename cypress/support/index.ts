import "./commands"
import "cypress-real-events/support";
import '@shelex/cypress-allure-plugin';
import 'cypress-promise/register';
import 'babel-polyfill';

// Alternatively you can use CommonJS syntax:
// require('./commands')
/// <reference types="cypress" />

export{}
Cypress.Server.defaults({
   ignore: (xhr) => true,
});
