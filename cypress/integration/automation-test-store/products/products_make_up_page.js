import { navigation } from "../../../support/page_objects/navigation";
import { makeUpPage } from "../../../support/page_objects/shopping_tabs/make_up_page";

describe("Verification of products on Make Up shopping Tab", ()=>{
    beforeEach(()=>{
        cy.visit("/")
        navigation.makeUpTab().click();
    });

    it("Should be able to find Extreme Mascara product on the Page", ()=>{
        makeUpPage.LIST_OF_PRODUCTS.extremeMascara.verifyProductsTitle();
    });


});