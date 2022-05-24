import { shoppingCartWidget } from "../../../support/page_objects/checkout/shopping_cart";
import { navigation } from "../../../support/page_objects/navigation";
import { skinCarePage } from "../../../support/page_objects/shopping_tabs/skin_care_page";
import { priceConverter } from "../../../support/utils/price_converter";
import {loginPage} from "../../../support/page_objects/login/login_page"
import { CheckoutOptions } from "../../../support/dictonaries/checkout_options";
import {checkoutGuestForm, CheckoutGuestForm} from "../../../support/page_objects/checkout/forms/guest_form"
import { makeFakeUser } from "../../../support/data/factories/user_factory";
import { checkoutConfirmationPage } from "../../../support/page_objects/checkout/checkout_confirmation_page";

describe("Checkout process", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should be able to add product to the cart", () => {
    var fakeUser = makeFakeUser();
    navigation.skinCareTab().click();
    const productToAdd = skinCarePage.SKIN_CARE_PRODUCTS.absoluteAntiAgeTreatmentCreme;
    productToAdd.findAddToCartButton().click();
    productToAdd.storePrice()
    shoppingCartWidget.hoverOverShoppingCart().getSelf().then(function(){
        const rawPrice = this[`productPrice_${productToAdd.getProductId()}`]
        const price = priceConverter.convertFromString(String(rawPrice));
        shoppingCartWidget.checkCartsTotal(price)
    })
    shoppingCartWidget.goToCheckoutPage()
    loginPage.chooseCheckoutOption(CheckoutOptions.CHECKOUT_AS_GUEST, checkoutGuestForm)
    .personalDetailsSection.fillOutSection(fakeUser);
    checkoutGuestForm.addressSection.fillOutSection(fakeUser);
    checkoutGuestForm.formNavigation.continueCheckout()
    checkoutConfirmationPage.shippingTable().contains('tr', 'Flat Shipping Rate').should("be.visible");
    checkoutConfirmationPage.paymentTable().contains('tr', 'Cash On Delivery').should("be.visible");
    checkoutConfirmationPage.confirmOrder()
    .verifyThatOrderIsCompleted();

  });

});
