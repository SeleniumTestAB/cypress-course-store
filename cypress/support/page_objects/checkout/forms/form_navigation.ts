import { checkoutConfirmationPage, CheckoutConfirmationPage } from "../checkout_confirmation_page";
import { shoppingCartPage, ShoppingCartPage } from "../shopping_cart_page";

export class FormNavigation {
    public continueCheckout(): CheckoutConfirmationPage{
        cy.get('[title="Continue"]').click();
        return checkoutConfirmationPage;
    }

    public backToCart(): ShoppingCartPage {
        cy.get('[title="back"]').click();
        return shoppingCartPage;
    }
}

export const formNavigation = new FormNavigation();