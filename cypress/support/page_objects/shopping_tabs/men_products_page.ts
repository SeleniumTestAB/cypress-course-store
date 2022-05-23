import { navigation } from "../navigation";
import { ShoppingTabPage } from "./shopping_tab_page";

class MenProductsPage extends ShoppingTabPage<MenProductsPage>{
    protected getMainTab(): Cypress.Chainable<any> {
        return navigation.menTab();
    }
}

export const menProductsPage = new MenProductsPage();