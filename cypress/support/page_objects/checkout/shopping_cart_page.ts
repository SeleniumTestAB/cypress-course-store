export class ShoppingCartPage {
    public removeAllProductsFromCart():void {
        cy.get("a[href*='cart&remove']").each($btn => {
            cy.wrap($btn).click();
        });
        cy.get('.contentpanel').should("contain.text", "Your shopping cart is empty!");
    }

}

export const shoppingCartPage = new ShoppingCartPage();