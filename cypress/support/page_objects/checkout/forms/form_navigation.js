"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formNavigation = exports.FormNavigation = void 0;
const checkout_confirmation_page_1 = require("../checkout_confirmation_page");
const shopping_cart_page_1 = require("../shopping_cart_page");
class FormNavigation {
    continueCheckout() {
        cy.get('[title="Continue"]').click();
        return checkout_confirmation_page_1.checkoutConfirmationPage;
    }
    backToCart() {
        cy.get('[title="back"]').click();
        return shopping_cart_page_1.shoppingCartPage;
    }
}
exports.FormNavigation = FormNavigation;
exports.formNavigation = new FormNavigation();
