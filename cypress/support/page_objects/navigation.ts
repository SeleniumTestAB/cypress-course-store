import { MainTabNames } from "../dictonaries/main_tab_names";

class NavigationMenu {
  public contactUsTab() {
    return cy.getVisible("a[href$='contact']");
  }

  public hairCareTab():Cypress.Chainable<any> {
    return this.getTab(MainTabNames.HAIR_CARE);
  }

  public makeUpTab():Cypress.Chainable<any> {
    return this.getTab(MainTabNames.MAKE_UP);
  }

  public skinCareTab():Cypress.Chainable<any> {
    return this.getTab(MainTabNames.SKIN_CARE);
  }

  public fragranceTab():Cypress.Chainable<any> {
    return this.getTab(MainTabNames.FRAGRANCE);
  }

  public apparelAndAccessoriesTab(): Cypress.Chainable<any> {
    return this.getTab(MainTabNames.APPAREL_AND_ACCESSORIES);
  }

  public booksTab():Cypress.Chainable<any> {
    return this.getTab(MainTabNames.BOOKS);
  }

  public menTab():Cypress.Chainable<any> {
    return cy.getWithContains("a[href*='product/category&path=']", "Men");
  }

  public verifyUserIsOnCorrectTab(title: string): void {
    cy.title().should("eq", title);
  }

  public goToProductSubCategoryByNavBar<Type>(parentTab: Cypress.Chainable<any>, label: string, page: Type): Type{
    parentTab.realHover().then(tab => {
      this.getSubTab(tab, label).click();
    })
    return page;
  }

  public getSubTab(parentTab: JQuery<HTMLElement>, label: string):Cypress.Chainable<any> {
    return this.getSubTabs(parentTab).contains(label);
  }

  public getSubTabs(parentTab: JQuery<HTMLElement>):Cypress.Chainable<any> {
    return cy.wrap(parentTab).parent('li').children('div .subcategories');
  }

  private getTab(label: string):Cypress.Chainable<any> {
    return cy
      .getWithContains("a[href*='product/category&path=']", label)
      .should("be.visible");
  }
}

export const navigation = new NavigationMenu();
