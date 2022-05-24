import { navigation } from "../navigation";
import { ShoppingProduct } from "./product/shopping_product";
import { ShoppingTabPage } from "./shopping_tab_page";

class MakeUpPage extends ShoppingTabPage<MakeUpPage>{
    public readonly LIST_OF_PRODUCTS = {
       extremeMascara: new ShoppingProduct("54", "L'EXTRÊME Instant Extensions Lengthening Mascara"),
        looseBronzer: new ShoppingProduct("53", "Tropiques Minerale Loose Bronzer"),
        productWithStock: new ShoppingProduct("58", "Product with stock locations"),
        delicateOil: new ShoppingProduct("57", "Delicate Oil-Free Powder Blush"),
        waterproofUndereyeConcealer: new ShoppingProduct("56", "Waterproof Protective Undereye Concealer"),
        vivaGlamLipstick: new ShoppingProduct("59", "Viva Glam Lipstick")
    };
    protected getMainTab(): Cypress.Chainable<any> {
        return navigation.makeUpTab();
    }
}

export const makeUpPage = new MakeUpPage();