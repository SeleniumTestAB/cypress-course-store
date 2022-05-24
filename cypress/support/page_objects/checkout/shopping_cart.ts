import bigDecimal = require('js-big-decimal');
import { priceConverter } from '../../utils/price_converter';

class ShoppingCartWidget {
    private rootLevelElement = ()=> cy.get("ul[class*='nav topcart");

    public goToShoppingCartPage(): void {
        this.rootLevelElement().find("a[title='View Cart']").click();
    }

    public goToCheckoutPage(): void {
        this.rootLevelElement().find("a[title='Checkout']").parent('div').click();
    }

    public hoverOverShoppingCart(): ShoppingCartWidget {
        this.rootLevelElement().find("li[class='dropdown hover']").realHover();
        return this;
    }

    public checkNumberOfItemsInCart(numberOfItems: number): ShoppingCartWidget {
        this.findItemCounter().invoke('text').then(count => {
            expect(Number.parseInt(count)).to.be.eq(numberOfItems);
        })
        return this;
    }

    public getSelf(): Cypress.Chainable<any> {
        return this.rootLevelElement();
    }

    public checkCartsTotal(total: bigDecimal): ShoppingCartWidget {
        this.findCartTotal().invoke('text').then(cartTotal => {
            const cartTotalAsNumber =  priceConverter.convertFromString(String(cartTotal))
            expect(cartTotalAsNumber.getValue()).to.be.eq(total.getValue());
        });
        return this;
    }

    private findItemCounter(): Cypress.Chainable<any>{
        return this.rootLevelElement().find("span[class*='label']")
    }

    private findCartTotal(): Cypress.Chainable<any> {
        return this.rootLevelElement().find("span[class='cart_total']");
    } 
}

export const shoppingCartWidget = new ShoppingCartWidget();