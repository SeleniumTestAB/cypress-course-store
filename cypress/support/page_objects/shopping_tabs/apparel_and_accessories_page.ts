import { navigation } from "../navigation";
import { ShoppingTabPage } from "./shopping_tab_page";

class ApparelAndAccessoriesPage extends ShoppingTabPage<ApparelAndAccessoriesPage> {
  protected getMainTab(): Cypress.Chainable<any> {
    return navigation.apparelAndAccessoriesTab();
  }
}

export const apparelAndAccessoriesPage = new ApparelAndAccessoriesPage();
