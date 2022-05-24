"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpPage = void 0;
const navigation_1 = require("../navigation");
const shopping_product_1 = require("./product/shopping_product");
const shopping_tab_page_1 = require("./shopping_tab_page");
class MakeUpPage extends shopping_tab_page_1.ShoppingTabPage {
    constructor() {
        super(...arguments);
        this.LIST_OF_PRODUCTS = {
            extremeMascara: new shopping_product_1.ShoppingProduct("54", "L'EXTRÊME Instant Extensions Lengthening Mascara"),
            looseBronzer: new shopping_product_1.ShoppingProduct("53", "Tropiques Minerale Loose Bronzer"),
            productWithStock: new shopping_product_1.ShoppingProduct("58", "Product with stock locations"),
            delicateOil: new shopping_product_1.ShoppingProduct("57", "Delicate Oil-Free Powder Blush"),
            waterproofUndereyeConcealer: new shopping_product_1.ShoppingProduct("56", "Waterproof Protective Undereye Concealer"),
            vivaGlamLipstick: new shopping_product_1.ShoppingProduct("59", "Viva Glam Lipstick")
        };
    }
    getMainTab() {
        return navigation_1.navigation.makeUpTab();
    }
}
exports.makeUpPage = new MakeUpPage();
