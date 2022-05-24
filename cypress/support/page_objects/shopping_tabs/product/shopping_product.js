"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingProduct = void 0;
const sorting_panel_1 = require("../sorting/sorting_panel");
class ShoppingProduct {
    constructor(productId, productTitle) {
        this.productId = productId;
        this.productTitle = productTitle;
    }
    verifyProductsTitle() {
        this.findProduct()
            .invoke("attr", "title")
            .then((title) => expect(title).to.be.eq(this.productTitle));
        return this;
    }
    getPath() {
        return this.productPath;
    }
    getProductId() {
        return this.productId;
    }
    storePrice() {
        this.findPrice()
            .find("div[class='oneprice']")
            .invoke("text")
            .as(`productPrice_${this.productId}`);
    }
    findPrice() {
        return this.findThumbnail().find("div[class='price']");
    }
    findAddToCartButton() {
        return this.findThumbnail().find(`[data-id='${this.productId}']`);
    }
    findThumbnail() {
        return this.findProduct()
            .parents("div[class='fixed_wrapper']")
            .siblings("div[class='thumbnail']");
    }
    findProduct() {
        const productPath = `a[class='prdocutname'][ href*='product_id=${this.productId}']`;
        sorting_panel_1.sortingPanel.isGridViewEnabled();
        return sorting_panel_1.sortingPanel.isListViewEnabled().then(function () {
            let rootSection;
            if (this.gridEnabled) {
                rootSection = "div[class='thumbnails grid row list-inline'] ";
            }
            else if (this.listEnabled) {
                rootSection = "div[class='thumbnails list row'] ";
            }
            this.productPath = rootSection + productPath;
            return cy.get(this.productPath);
        });
    }
}
exports.ShoppingProduct = ShoppingProduct;
