"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutGuestForm = exports.CheckoutGuestForm = void 0;
const address_section_1 = require("./sections/address_section");
const personal_details_section_1 = require("./sections/personal_details_section");
const form_navigation_1 = require("./form_navigation");
class CheckoutGuestForm {
    constructor() {
        this.formId = "guestFrm";
        this.personalDetailsSection = new personal_details_section_1.PersonalDetailsSection(this.formId);
        this.addressSection = new address_section_1.AddressSection(this.formId);
        this.formNavigation = form_navigation_1.formNavigation;
    }
}
exports.CheckoutGuestForm = CheckoutGuestForm;
exports.checkoutGuestForm = new CheckoutGuestForm();
