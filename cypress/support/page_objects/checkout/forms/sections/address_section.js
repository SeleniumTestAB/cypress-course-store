"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressSection = void 0;
class AddressSection {
    constructor(sectionId) {
        this.firstAddressInput = () => cy.get(`#${this.formId}_address_1`);
        this.cityInput = () => cy.get(`#${this.formId}_city`);
        this.regionSelect = () => cy.get(`#${this.formId}_zone_id`);
        this.zipCodeInput = () => cy.get(`#${this.formId}_postcode`);
        this.countrySelect = () => cy.get(`#${this.formId}_country_id`);
        this.formId = sectionId;
    }
    fillOutSection(user) {
        this.firstAddressInput().type(user.address.firstAddress);
        this.cityInput().type(user.address.city);
        this.countrySelect().select(user.address.country);
        this.regionSelect().select(user.address.region);
        this.zipCodeInput().type(user.address.zipCode);
    }
}
exports.AddressSection = AddressSection;
