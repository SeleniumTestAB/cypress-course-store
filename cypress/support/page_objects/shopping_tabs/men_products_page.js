"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menProductsPage = void 0;
const navigation_1 = require("../navigation");
const shopping_tab_page_1 = require("./shopping_tab_page");
class MenProductsPage extends shopping_tab_page_1.ShoppingTabPage {
    getMainTab() {
        return navigation_1.navigation.menTab();
    }
}
exports.menProductsPage = new MenProductsPage();
