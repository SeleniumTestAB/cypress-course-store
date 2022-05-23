import { MAKE_UP_SUB_CATEGORIES } from "../../../support/dictonaries/sub_categories_names";
import { navigation } from "../../../support/page_objects/navigation";
import { apparelAndAccessoriesPage } from "../../../support/page_objects/shopping_tabs/apparel_and_accessories_page";
import { makeUpPage } from "../../../support/page_objects/shopping_tabs/make_up_page";
import { menProductsPage } from "../../../support/page_objects/shopping_tabs/men_products_page";
import { skinCarePage } from "../../../support/page_objects/shopping_tabs/skin_care_page";

describe("Navigation tests related to sub category navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should be able to verify categories on Apparel & accessories Tab", () => {
    navigation.apparelAndAccessoriesTab().click();
    apparelAndAccessoriesPage.verifySubCategories();
  });

  it("Should be able to verify categories on Skin Care Tab", () => {
    navigation.skinCareTab().click();
    skinCarePage.verifySubCategories();
  });

  it("Should be able to verify categories on Men Products Tab", () => {
    navigation.menTab().click({force: true});
    menProductsPage.verifySubCategories();
  });

  it("Should be able to navigate to Cheeks sub category of Make Up Tab", () => {
    navigation.makeUpTab().click();
    navigation.goToProductSubCategoryByNavBar(makeUpPage.getMainTab(), MAKE_UP_SUB_CATEGORIES.cheeks, makeUpPage);
    navigation.verifyUserIsOnCorrectTab(MAKE_UP_SUB_CATEGORIES.cheeks);
  });

  it.only("Should be able to navigate to Eyes sub category of Make Up Tab", () => {
    navigation.makeUpTab().click();
    navigation.goToProductSubCategoryByNavBar(makeUpPage.getMainTab(), MAKE_UP_SUB_CATEGORIES.eyes, makeUpPage);
    navigation.verifyUserIsOnCorrectTab(MAKE_UP_SUB_CATEGORIES.eyes);
  });
});
