"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shoppingCartWidget = void 0;
const price_converter_1 = require("../../utils/price_converter");
class ShoppingCartWidget {
    constructor() {
        this.rootLevelElement = () => cy.get("ul[class*='nav topcart");
    }
    goToShoppingCartPage() {
        this.rootLevelElement().find("a[title='View Cart']").click();
    }
    goToCheckoutPage() {
        this.rootLevelElement().find("a[title='Checkout']").parent('div').click();
    }
    hoverOverShoppingCart() {
        this.rootLevelElement().find("li[class='dropdown hover']").realHover();
        return this;
    }
    checkNumberOfItemsInCart(numberOfItems) {
        this.findItemCounter().invoke('text').then(count => {
            expect(Number.parseInt(count)).to.be.eq(numberOfItems);
        });
        return this;
    }
    getSelf() {
        return this.rootLevelElement();
    }
    checkCartsTotal(total) {
        this.findCartTotal().invoke('text').then(cartTotal => {
            const cartTotalAsNumber = price_converter_1.priceConverter.convertFromString(String(cartTotal));
            expect(cartTotalAsNumber.getValue()).to.be.eq(total.getValue());
        });
        return this;
    }
    findItemCounter() {
        return this.rootLevelElement().find("span[class*='label']");
    }
    findCartTotal() {
        return this.rootLevelElement().find("span[class='cart_total']");
    }
}
exports.shoppingCartWidget = new ShoppingCartWidget();
