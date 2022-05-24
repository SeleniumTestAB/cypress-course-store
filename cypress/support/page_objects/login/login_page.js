"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginPage = void 0;
const checkout_options_1 = require("../../dictonaries/checkout_options");
class LoginPage {
    constructor() {
        this.registerAccountOption = () => cy.get("#accountFrm_accountregister");
        this.checkoutAsGuestOption = () => cy.get("#accountFrm_accountguest");
    }
    chooseCheckoutOption(option, formPage) {
        cy.log("I am in options for checkout");
        switch (option) {
            case checkout_options_1.CheckoutOptions.REGISTER_ACCOUNT:
                this.checkOption(this.registerAccountOption());
                break;
            case checkout_options_1.CheckoutOptions.CHECKOUT_AS_GUEST:
                this.checkOption(this.checkoutAsGuestOption());
                break;
        }
        cy.get("#accountFrm").submit();
        return formPage;
    }
    checkOption(checkbox) {
        checkbox.then(self => {
            if (self.attr('checked') != "checked") {
                cy.wrap(self).click();
            }
        });
    }
}
exports.loginPage = new LoginPage();
