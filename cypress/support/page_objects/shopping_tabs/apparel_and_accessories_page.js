"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apparelAndAccessoriesPage = void 0;
const navigation_1 = require("../navigation");
const shopping_tab_page_1 = require("./shopping_tab_page");
class ApparelAndAccessoriesPage extends shopping_tab_page_1.ShoppingTabPage {
    getMainTab() {
        return navigation_1.navigation.apparelAndAccessoriesTab();
    }
}
exports.apparelAndAccessoriesPage = new ApparelAndAccessoriesPage();
