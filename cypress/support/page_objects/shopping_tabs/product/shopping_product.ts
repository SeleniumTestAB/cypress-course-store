import { sortingPanel } from "../sorting/sorting_panel";

export class ShoppingProduct {
    private productId: string;
    private productTitle: string;
    private productPath!: string;

    constructor(productId: string, productTitle: string) {
        this.productId = productId;
        this.productTitle = productTitle;
    }

    public verifyProductsTitle(): ShoppingProduct {
        this.findProduct().invoke('attr', 'title')
        .then(title => expect(title).to.be.eq(this.productTitle))
        return this;
    }

    public getPath(): string {
        return this.productPath;
    }

    public getProductId(): string {
        return this.productId;
    }

    public storePrice(): void {
        this.findPrice().find("div[class='onepice']").invoke('text').as(`productPrice_${this.productId}`)
    }

    public findPrice(): Cypress.Chainable<any> {
        return this.findThumbnail().find("div[class='price'");
    }

    public findAddToCartButton(): Cypress.Chainable<any> {
        return this.findThumbnail().find(`data-id=${this.productId}`);
        
    }

    private findThumbnail(): Cypress.Chainable<any> {
        return this.findProduct().parent("div[class='thumbnail'");
    }

    private findProduct(): Cypress.Chainable<any> {
        let rootSection;
        const productPath = `a[class='prdocutname'][ href*='product_id=${this.productId}']`;
        if(sortingPanel.isGridViewEnabled()) {
            rootSection = "div[class='thumbnails grid row list-inline'] ";
        
        } else if(sortingPanel.isListViewEnabled()) {
            rootSection = "div[class='thumbnails list row'] ";
        }
        this.productPath = rootSection + productPath; 
        return cy.get(this.productPath);
    }
}