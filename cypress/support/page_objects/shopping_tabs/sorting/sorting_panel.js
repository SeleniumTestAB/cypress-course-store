"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortingPanel = void 0;
const product_view_options_1 = require("../../../dictonaries/product_view_options");
class SortingPanel {
    constructor() {
        this.gridButtonId = "#grid";
        this.listButtonId = "#list";
        this.gridButton = () => cy.getInteractable("#grid");
        this.listButton = () => cy.getInteractable("#list");
    }
    changeProductsView(option, page) {
        switch (option) {
            case product_view_options_1.ProductViewOptions.GRID:
                this.gridButton().click();
                break;
            case product_view_options_1.ProductViewOptions.LIST:
                this.listButton().click();
                break;
        }
        return page;
    }
    isGridViewEnabled() {
        return this.checkIfViewIsEnabled(this.gridButton(), "gridEnabled");
    }
    isListViewEnabled() {
        return this.checkIfViewIsEnabled(this.listButton(), "listEnabled");
    }
    checkIfViewIsEnabled(viewOption, viewOptionAlias) {
        return viewOption.invoke('attr', 'class')
            .then(function (elementClass) { elementClass.includes('btn-orange'); })
            .as(viewOptionAlias);
    }
}
exports.sortingPanel = new SortingPanel();
