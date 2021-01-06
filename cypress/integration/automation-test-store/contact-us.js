/// <reference types="Cypress" />


describe("Test Contact Us from via Automation Test Store", () => {
    it('Should be able to submit a seccessful submission via contact us form', () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href$='contact']").click()
        cy.xpath('//input[@id="ContactUsFrm_first_name"]').type("some name")
        cy.xpath('//input[@id="ContactUsFrm_email"]').type("someemail@gmail.com")
        cy.xpath('//textarea[@id="ContactUsFrm_enquiry"]').type("some message")
        cy.get('#ContactUsFrm').submit()
        cy.xpath('//p[contains(string(),"Your enquiry has been successfully sent to the store owner!")]').should('exist')
        .should('be.visible')
    });

})