
import { navigation } from "../../../support/page_objects/navigation";
import { makeUpPage } from "../../../support/page_objects/shopping_tabs/make_up_page";
import { proxy, flush } from "@alfonso-presa/soft-assert";
const softExpect = proxy(chai.expect);

describe("Verification of products on Make Up shopping Tab", ()=>{
    beforeEach(()=>{
        cy.visit("/")
        navigation.makeUpTab().click();
    });

    it("Should be able to find every product on the Page", ()=>{
        Object.values(makeUpPage.LIST_OF_PRODUCTS).forEach(value => {
            value.verifyProductsTitle();
        });
    });

    it.only("Should be a 'add to cart' option on every product", ()=>{
    
        Object.values(makeUpPage.LIST_OF_PRODUCTS).forEach(value => {
            const addToCartButton = value.findAddToCartButton();
            addToCartButton.then(self => {
                const itsClass = self.attr('class');
                const visibility = self.css('visibility');
                softExpect(itsClass).to.contain("productcart")
                softExpect(visibility).is.not.undefined;
                softExpect(visibility).is.not.null;
                softExpect(visibility).to.be.eq("visible")});

                flush();
            });
    });

});