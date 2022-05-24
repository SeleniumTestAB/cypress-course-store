export class OrderConfirmedPage {
    public verifyThatOrderIsCompleted(): OrderConfirmedPage {
        cy.location('href', {timeout: 5000}).should('contain', "/success");
        cy.get('span[class="maintext"]').invoke('text')
        .then($text=> {
            expect($text.trim()).to.be.eq("Your Order Has Been Processed!")
        });
        cy.contains('p', "Your order has been successfully processed!").should("be.visible");
        return this;
    }
}
export const orderConfirmedPage = new OrderConfirmedPage();