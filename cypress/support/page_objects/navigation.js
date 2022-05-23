"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigation = void 0;
const main_tab_names_1 = require("../dictonaries/main_tab_names");
class NavigationMenu {
    contactUsTab() {
        return cy.getVisible("a[href$='contact']");
    }
    hairCareTab() {
        return this.getTab(main_tab_names_1.MainTabNames.HAIR_CARE);
    }
    makeUpTab() {
        return this.getTab(main_tab_names_1.MainTabNames.MAKE_UP);
    }
    skinCareTab() {
        return this.getTab(main_tab_names_1.MainTabNames.SKIN_CARE);
    }
    fragranceTab() {
        return this.getTab(main_tab_names_1.MainTabNames.FRAGRANCE);
    }
    apparelAndAccessoriesTab() {
        return this.getTab(main_tab_names_1.MainTabNames.APPAREL_AND_ACCESSORIES);
    }
    booksTab() {
        return this.getTab(main_tab_names_1.MainTabNames.BOOKS);
    }
    menTab() {
        return cy.getWithContains("a[href*='product/category&path=']", "Men");
    }
    verifyUserIsOnCorrectTab(title) {
        cy.title().should("eq", title);
    }
    goToProductSubCategoryByNavBar(parentTab, label, page) {
        parentTab.realHover().then(tab => {
            this.getSubTab(tab, label).click();
        });
        return page;
    }
    getSubTab(parentTab, label) {
        return this.getSubTabs(parentTab).contains(label);
    }
    getSubTabs(parentTab) {
        return cy.wrap(parentTab).parent('li').children('div .subcategories');
    }
    getTab(label) {
        return cy
            .getWithContains("a[href*='product/category&path=']", label)
            .should("be.visible");
    }
}
exports.navigation = new NavigationMenu();
