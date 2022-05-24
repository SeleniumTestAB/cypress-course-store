import { MainTabNames } from "../../../support/dictonaries/main_tab_names";
import { navigation } from "../../../support/page_objects/navigation";

describe("Test Navigation of shopping tabs within  Automation Test Store", () => {

    beforeEach(()=>{
        cy.visit("/")
    })
  it("Should go to Hair Care Page", () => {
    navigation.hairCareTab().click();
    navigation.verifyUserIsOnCorrectTab(MainTabNames.HAIR_CARE);
  });

  it("Should go to Make Up Page", () => {
    navigation.makeUpTab().click();
    navigation.verifyUserIsOnCorrectTab(MainTabNames.MAKE_UP);
  });

  it("Should go to Skin Care Page", () => {
    navigation.skinCareTab().click();
    navigation.verifyUserIsOnCorrectTab(MainTabNames.SKIN_CARE);
  });

  it("Should go to Fragrance Page", () => {
    navigation.fragranceTab().click();
    navigation.verifyUserIsOnCorrectTab(MainTabNames.FRAGRANCE);
  });

  it("Should go to Apparel & accessories Page", () => {
    navigation.apparelAndAccessoriesTab().click();
    navigation.verifyUserIsOnCorrectTab(MainTabNames.APPAREL_AND_ACCESSORIES);
  });

  it("Should go to Men Page", () => {
    navigation.menTab().should('be.visible').click();
    navigation.verifyUserIsOnCorrectTab(MainTabNames.MEN);
  });

  it("Should go to Books Page", () => {
    navigation.booksTab().click();
    navigation.verifyUserIsOnCorrectTab(MainTabNames.BOOKS);
  });
 
});
