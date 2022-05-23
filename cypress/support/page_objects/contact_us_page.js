"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ContactUsPage_contactFirstName, _ContactUsPage_contactEmail, _ContactUsPage_contactEnquiry, _ContactUsPage_submitButton;
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactUsPage = void 0;
class ContactUsPage {
    constructor() {
        _ContactUsPage_contactFirstName.set(this, () => cy.getInteractable("#ContactUsFrm_first_name"));
        _ContactUsPage_contactEmail.set(this, () => cy.getInteractable("#ContactUsFrm_email"));
        _ContactUsPage_contactEnquiry.set(this, () => cy.getInteractable("#ContactUsFrm_enquiry"));
        _ContactUsPage_submitButton.set(this, () => cy.getVisible("#ContactUsFrm"));
    }
    fillFirstName(value) {
        __classPrivateFieldGet(this, _ContactUsPage_contactFirstName, "f").call(this).type(value);
        return this;
    }
    fillContactEmail(value) {
        __classPrivateFieldGet(this, _ContactUsPage_contactEmail, "f").call(this).type(value);
        return this;
    }
    fillEnquiry(value) {
        __classPrivateFieldGet(this, _ContactUsPage_contactEnquiry, "f").call(this).type(value);
        return this;
    }
    submitEnquiry() {
        __classPrivateFieldGet(this, _ContactUsPage_submitButton, "f").call(this).submit();
        return this;
    }
    verifyEnquiryWasSubmitted() {
        cy.contains("p", "Your enquiry has been successfully sent to the store owner!").should("be.visible");
    }
}
_ContactUsPage_contactFirstName = new WeakMap(), _ContactUsPage_contactEmail = new WeakMap(), _ContactUsPage_contactEnquiry = new WeakMap(), _ContactUsPage_submitButton = new WeakMap();
exports.contactUsPage = new ContactUsPage();
