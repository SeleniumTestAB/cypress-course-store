"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skinCarePage = void 0;
const navigation_1 = require("../navigation");
const shopping_tab_page_1 = require("./shopping_tab_page");
class SkinCarePage extends shopping_tab_page_1.ShoppingTabPage {
    getMainTab() {
        return navigation_1.navigation.skinCareTab();
    }
}
exports.skinCarePage = new SkinCarePage();
