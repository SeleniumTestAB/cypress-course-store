"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutConfirmationPage = exports.CheckoutConfirmationPage = void 0;
const order_confirmed_page_1 = require("./order_confirmed_page");
class CheckoutConfirmationPage {
    constructor() {
        this.shippingTable = () => cy.get('table[class="table confirm_shippment_options"]');
        this.paymentTable = () => cy.get('table[class="table confirm_payment_options"]');
    }
    confirmOrder() {
        cy.get("#checkout_btn").click();
        return order_confirmed_page_1.orderConfirmedPage;
    }
}
exports.CheckoutConfirmationPage = CheckoutConfirmationPage;
exports.checkoutConfirmationPage = new CheckoutConfirmationPage();
