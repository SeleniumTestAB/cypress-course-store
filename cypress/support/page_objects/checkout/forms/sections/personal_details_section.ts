import { IUser } from "../../../../data/factories/user_factory";

export class PersonalDetailsSection{
    private formId: string;
    private firstNameInput = ()=> cy.get(`#${this.formId}_firstname`);
    private lastNameInput = ()=> cy.get(`#${this.formId}_lastname`);
    private emailInput = ()=> cy.get(`#${this.formId}_email`);
    constructor(sectionId: string) {
        this.formId = sectionId;
    }

    public fillOutSection(user: IUser): void {
        this.firstNameInput().type(user.firstName);
        this.lastNameInput().type(user.lastName);
        this.emailInput().type(user.email);
    }
}