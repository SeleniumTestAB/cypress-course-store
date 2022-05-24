import { navigation } from "../navigation";
import { ShoppingProduct } from "./product/shopping_product";
import { ShoppingTabPage } from "./shopping_tab_page";

class SkinCarePage extends ShoppingTabPage<SkinCarePage> {
    public readonly SKIN_CARE_PRODUCTS ={
        flashBronzerBodyGel : new ShoppingProduct("67", "Flash Bronzer Body Gel"),
        absoluteEyePreciousCells : new ShoppingProduct("65", "Absolue Eye Precious Cells"),
        cremePrecieuseNuit50ML : new ShoppingProduct("43", "Creme Precieuse Nuit 50ml"),
        absoluteAntiAgeTreatmentCreme : new ShoppingProduct("68", "Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15"),
        totalMoistureFaccialCream : new ShoppingProduct("66", "Total Moisture Facial Cream")
    }

    protected getMainTab(): Cypress.Chainable<any> {
        return navigation.skinCareTab();
    }
}

export const skinCarePage = new SkinCarePage();