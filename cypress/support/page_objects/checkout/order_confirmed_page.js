"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderConfirmedPage = exports.OrderConfirmedPage = void 0;
class OrderConfirmedPage {
    verifyThatOrderIsCompleted() {
        cy.location('href', { timeout: 5000 }).should('contain', "/success");
        cy.get('span[class="maintext"]').invoke('text')
            .then($text => {
            expect($text.trim()).to.be.eq("Your Order Has Been Processed!");
        });
        cy.contains('p', "Your order has been successfully processed!").should("be.visible");
        return this;
    }
}
exports.OrderConfirmedPage = OrderConfirmedPage;
exports.orderConfirmedPage = new OrderConfirmedPage();
