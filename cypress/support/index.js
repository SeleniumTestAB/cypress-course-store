"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./commands");
require("cypress-real-events/support");
require("@shelex/cypress-allure-plugin");
require("cypress-promise/register");
require("babel-polyfill");
Cypress.Server.defaults({
    ignore: (xhr) => true,
});
