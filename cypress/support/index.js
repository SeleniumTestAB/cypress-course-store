"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./commands");
require("cypress-real-events/support");
Cypress.Server.defaults({
    ignore: (xhr) => true,
});
