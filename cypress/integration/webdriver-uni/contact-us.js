/// <reference types="Cypress" />


describe(" Test Contact Us from via WebdriverUni", () => {
    it('Should be able to submit a seccessful submission via contact us form', () => {
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.xpath('//input[@name="first_name"]').type("some name")
        cy.xpath('//input[@name="last_name"]').type("some last name")
        cy.xpath('//input[@name="email"]').type("someemail@gmail.com")
        cy.xpath('//textarea[@name="message"]').type("some message")
        cy.xpath('//form[@id="contact_form"]').submit()
        cy.xpath('//div[@id="contact_reply"]').should('be.visible')
    });
    it('Should not be able to submit a seccessful submission via contact us form', () => {
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.xpath('//input[@name="first_name"]').type("some name")
        cy.xpath('//input[@name="last_name"]').type("some last name")
        cy.xpath('//textarea[@name="message"]').type("some message")
        cy.xpath('//form[@id="contact_form"]').submit()
        cy.xpath('//body').should('contain.text', "Error: Invalid email address")
    });
})