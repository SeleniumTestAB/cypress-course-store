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
        this.findProduct().invoke('attr', 'title')
            .then(title => expect(title).to.be.eq(this.productTitle));
        return this;
    }
    getPath() {
        return this.productPath;
    }
    findAddToCartButton() {
        return this.findThumbnail().find(`data-id=${this.productId}`);
    }
    findThumbnail() {
        return this.findProduct().parent("div[class='thumbnail'");
    }
    findProduct() {
        let rootSection;
        const productPath = `a[class='prdocutname'][ href*='product_id=${this.productId}']`;
        if (sorting_panel_1.sortingPanel.isGridViewEnabled()) {
            rootSection = "div[class='thumbnails grid row list-inline'] ";
        }
        else if (sorting_panel_1.sortingPanel.isListViewEnabled()) {
            rootSection = "div[class='thumbnails list row'] ";
        }
        this.productPath = rootSection + productPath;
        return cy.get(this.productPath);
    }
}
exports.ShoppingProduct = ShoppingProduct;
