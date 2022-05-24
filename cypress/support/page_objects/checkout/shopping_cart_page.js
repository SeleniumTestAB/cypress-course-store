"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shoppingCartPage = exports.ShoppingCartPage = void 0;
class ShoppingCartPage {
    removeAllProductsFromCart() {
        cy.get("a[href*='cart&remove']").each($btn => {
            cy.wrap($btn).click();
        });
        cy.get('.contentpanel').should("contain.text", "Your shopping cart is empty!");
    }
}
exports.ShoppingCartPage = ShoppingCartPage;
exports.shoppingCartPage = new ShoppingCartPage();
