/// <reference types="Cypress" />
import { contactUsPage } from "../../support/page_objects/contact_us_page";

describe("Test Contact Us from via Automation Test Store", () => {
  it("Should be able to submit a seccessful submission via contact us form", () => {
    cy.visit("/");
    navigation.contactUsTab().click();
    contactUsPage.fillFirstName("some name")
    .fillContactEmail("someemail@gmail.com")
    .fillEnquiry("some message")
    .submitEnquiry()
    .verifyEnquiryWasSubmitted();

  });


});
