"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigation = void 0;
var NavigationMenu = /** @class */ (function () {
    function NavigationMenu() {
    }
    NavigationMenu.prototype.hairCareTab = function () {
        return this.getTab('Hair Care');
    };
    NavigationMenu.prototype.getTab = function (label) {
        return cy.getVisible("a[href*='product/category&path='", label);
    };
    return NavigationMenu;
}());
exports.navigation = new NavigationMenu();
