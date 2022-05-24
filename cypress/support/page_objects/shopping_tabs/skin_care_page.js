"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skinCarePage = void 0;
const navigation_1 = require("../navigation");
const shopping_product_1 = require("./product/shopping_product");
const shopping_tab_page_1 = require("./shopping_tab_page");
class SkinCarePage extends shopping_tab_page_1.ShoppingTabPage {
    constructor() {
        super(...arguments);
        this.SKIN_CARE_PRODUCTS = {
            flashBronzerBodyGel: new shopping_product_1.ShoppingProduct("67", "Flash Bronzer Body Gel"),
            absoluteEyePreciousCells: new shopping_product_1.ShoppingProduct("65", "Absolue Eye Precious Cells"),
            cremePrecieuseNuit50ML: new shopping_product_1.ShoppingProduct("43", "Creme Precieuse Nuit 50ml"),
            absoluteAntiAgeTreatmentCreme: new shopping_product_1.ShoppingProduct("68", "Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15"),
            totalMoistureFaccialCream: new shopping_product_1.ShoppingProduct("66", "Total Moisture Facial Cream")
        };
    }
    getMainTab() {
        return navigation_1.navigation.skinCareTab();
    }
}
exports.skinCarePage = new SkinCarePage();
