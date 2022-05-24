import { CheckoutOptions } from "../../dictonaries/checkout_options";

class LoginPage {
    private registerAccountOption = ()=> cy.get("#accountFrm_accountregister");
    private checkoutAsGuestOption = ()=> cy.get("#accountFrm_accountguest");

    public  chooseCheckoutOption<Type>(option:CheckoutOptions, formPage:Type): Type {
        cy.log("I am in options for checkout")
        switch(option) {
            case CheckoutOptions.REGISTER_ACCOUNT:
                this.checkOption(this.registerAccountOption());
                break;
            case CheckoutOptions.CHECKOUT_AS_GUEST:
                this.checkOption(this.checkoutAsGuestOption());
                break;
        }
        cy.get("#accountFrm").submit();
        return formPage;
    }

    private checkOption(checkbox: Cypress.Chainable<any>): void {
        checkbox.then(self => {
            if(self.attr('checked') != "checked") {
                cy.wrap(self).click();
            }
        })
    }
}

export const loginPage = new LoginPage();