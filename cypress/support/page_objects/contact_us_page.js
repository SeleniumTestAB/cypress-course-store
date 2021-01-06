class ContactUsPage{

    getForm(){
        return cy.get('#ContactUsFrm')
    }

    getEmailField(){
        return this.getForm().find
    }

}