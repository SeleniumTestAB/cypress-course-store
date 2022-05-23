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

    public isGridViewEnabled(): boolean | undefined{
        return this.checkIfViewIsEnabled(this.gridButton(), this.gridButtonId)
    }

    public isListViewEnabled(): boolean | undefined {
        return this.checkIfViewIsEnabled(this.listButton(), this.listButtonId)
    }

    private checkIfViewIsEnabled(viewOption: Cypress.Chainable<any>, viewOptionId: string): boolean | undefined {
       viewOption.should('exist');
       const $option = Cypress.$(viewOptionId);
       return  $option.attr('class')?.includes('btn-orange');

    }
}

export const sortingPanel = new SortingPanel();