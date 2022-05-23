import { navigation } from "../navigation";

export abstract class ShoppingTabPage<TabPage> {
  public verifySubCategories(): void {
    this.getMainTab()
      .realHover()
      .then((mainTab) => {
        const subTabs = navigation.getSubTabs(mainTab);
        const subCategories = this.findListOfSubCategories();
        subTabs.each((subTab) => {
          subCategories.should("contain", subTab.text());
        });
      });
  }

  protected abstract getMainTab(): Cypress.Chainable<any>;

  protected findListOfSubCategories(): Cypress.Chainable<any> {
    return cy.getVisible("ul[class='thumbnails row']").find("li a");
  }
}
