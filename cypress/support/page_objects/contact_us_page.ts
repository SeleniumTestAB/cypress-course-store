class ContactUsPage {
  #contactFirstName = () => cy.getInteractable("#ContactUsFrm_first_name");
  #contactEmail = () => cy.getInteractable("#ContactUsFrm_email");
  #contactEnquiry = () => cy.getInteractable("#ContactUsFrm_enquiry");
  #submitButton = () => cy.getVisible("#ContactUsFrm");

  public fillFirstName(value: string): ContactUsPage {
    this.#contactFirstName().type(value);
    return this;
  }

  public fillContactEmail(value: string): ContactUsPage {
    this.#contactEmail().type(value);
    return this;
  }

  public fillEnquiry(value: string): ContactUsPage {
    this.#contactEnquiry().type(value);
    return this;
  }

  public submitEnquiry(): ContactUsPage {
    this.#submitButton().submit();
    return this;
  }

  public verifyEnquiryWasSubmitted(): void {
    cy.contains(
      "p",
      "Your enquiry has been successfully sent to the store owner!"
    ).should("be.visible");
  }
}

export const contactUsPage = new ContactUsPage();
