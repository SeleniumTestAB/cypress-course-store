import { IUser } from "../../../../data/factories/user_factory";

export class AddressSection {
    private formId: string;
    private firstAddressInput = ()=> cy.get(`#${this.formId}_address_1`);
    private cityInput = ()=> cy.get(`#${this.formId}_city`);
    private regionSelect = ()=> cy.get(`#${this.formId}_zone_id`);
    private zipCodeInput = ()=> cy.get(`#${this.formId}_postcode`);
    private countrySelect = ()=> cy.get(`#${this.formId}_country_id`);

    constructor(sectionId: string) {
        this.formId = sectionId;
    }

    public fillOutSection(user: IUser): void {
        this.firstAddressInput().type(user.address.firstAddress);
        this.cityInput().type(user.address.city);
        this.countrySelect().select(user.address.country);
        this.regionSelect().select(user.address.region);
        this.zipCodeInput().type(user.address.zipCode);
    
    }
}