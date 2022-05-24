import { orderConfirmedPage, OrderConfirmedPage } from "./order_confirmed_page";

export class CheckoutConfirmationPage {
    public readonly shippingTable = ()=> cy.get('table[class="table confirm_shippment_options"]');
    public readonly paymentTable = ()=> cy.get('table[class="table confirm_payment_options"]');

    public confirmOrder(): OrderConfirmedPage {
        cy.get("#checkout_btn").click();
        return orderConfirmedPage;
    }
}

export const checkoutConfirmationPage = new CheckoutConfirmationPage();