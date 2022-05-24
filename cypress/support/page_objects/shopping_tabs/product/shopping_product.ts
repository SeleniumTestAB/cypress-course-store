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
    this.findProduct()
      .invoke("attr", "title")
      .then((title) => expect(title).to.be.eq(this.productTitle));
    return this;
  }

  public getPath(): string {
    return this.productPath;
  }

  public getProductId(): string {
    return this.productId;
  }

  public storePrice(): void {
    this.findPrice()
      .find("div[class='oneprice']")
      .invoke("text")
      .as(`productPrice_${this.productId}`);
  }

  public findPrice(): Cypress.Chainable<any> {
    return this.findThumbnail().find("div[class='price']");
  }

  public findAddToCartButton(): Cypress.Chainable<JQuery> {
    return this.findThumbnail().find(`[data-id='${this.productId}']`);
  }

  private findThumbnail(): Cypress.Chainable<any> {
    return this.findProduct()
      .parents("div[class='fixed_wrapper']")
      .siblings("div[class='thumbnail']");
  }

  private findProduct(): Cypress.Chainable<any> {
    const productPath = `a[class='prdocutname'][ href*='product_id=${this.productId}']`;
    sortingPanel.isGridViewEnabled();
    return sortingPanel.isListViewEnabled().then(function () {
      let rootSection;
      if (this.gridEnabled) {
        rootSection = "div[class='thumbnails grid row list-inline'] ";
      } else if (this.listEnabled) {
        rootSection = "div[class='thumbnails list row'] ";
      }
      this.productPath = rootSection + productPath;
      return cy.get(this.productPath);
    });
  }
}
