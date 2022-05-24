"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalDetailsSection = void 0;
class PersonalDetailsSection {
    constructor(sectionId) {
        this.firstNameInput = () => cy.get(`#${this.formId}_firstname`);
        this.lastNameInput = () => cy.get(`#${this.formId}_lastname`);
        this.emailInput = () => cy.get(`#${this.formId}_email`);
        this.formId = sectionId;
    }
    fillOutSection(user) {
        this.firstNameInput().type(user.firstName);
        this.lastNameInput().type(user.lastName);
        this.emailInput().type(user.email);
    }
}
exports.PersonalDetailsSection = PersonalDetailsSection;
