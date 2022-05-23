import { navigation } from "../navigation";
import { ShoppingTabPage } from "./shopping_tab_page";

class SkinCarePage extends ShoppingTabPage<SkinCarePage> {
    
    
    protected getMainTab(): Cypress.Chainable<any> {
        return navigation.skinCareTab();
    }
}

export const skinCarePage = new SkinCarePage();