"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingTabPage = void 0;
const navigation_1 = require("../navigation");
class ShoppingTabPage {
    verifySubCategories() {
        this.getMainTab()
            .realHover()
            .then((mainTab) => {
            const subTabs = navigation_1.navigation.getSubTabs(mainTab);
            const subCategories = this.findListOfSubCategories();
            subTabs.each((subTab) => {
                subCategories.should("contain", subTab.text());
            });
        });
    }
    findListOfSubCategories() {
        return cy.getVisible("ul[class='thumbnails row']").find("li a");
    }
}
exports.ShoppingTabPage = ShoppingTabPage;
