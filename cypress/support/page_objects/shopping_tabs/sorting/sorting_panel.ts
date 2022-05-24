import { ProductViewOptions } from "../../../dictonaries/product_view_options";

class SortingPanel {
    private gridButtonId = "#grid";
    private listButtonId = "#list";
    private gridButton = ()=> cy.getInteractable("#grid");
    private listButton = ()=> cy.getInteractable("#list");

    public changeProductsView<Type>(option: ProductViewOptions, page: Type): Type {
        switch(option) {
            case ProductViewOptions.GRID:
                this.gridButton().click();
                break;
            case ProductViewOptions.LIST:
                this.listButton().click();
                break;
        }
        return page;
    }

    public isGridViewEnabled(): Cypress.Chainable<any>{
        return this.checkIfViewIsEnabled(this.gridButton(), "gridEnabled");
    }

    public isListViewEnabled(): Cypress.Chainable<any> {
        return this.checkIfViewIsEnabled(this.listButton(), "listEnabled");
    }

    private checkIfViewIsEnabled(viewOption: Cypress.Chainable<any>, viewOptionAlias: string): Cypress.Chainable<any> {
       return  viewOption.invoke('attr', 'class')
       .then(function(elementClass) {  elementClass.includes('btn-orange')})
       .as(viewOptionAlias);
    
       
    }
}

export const sortingPanel = new SortingPanel();