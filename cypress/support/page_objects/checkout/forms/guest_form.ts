import { AddressSection } from "./sections/address_section";
import { PersonalDetailsSection } from "./sections/personal_details_section";
import { formNavigation } from "./form_navigation";

export class CheckoutGuestForm {
   private readonly formId = "guestFrm";
   public readonly personalDetailsSection = new PersonalDetailsSection(this.formId);
   public readonly addressSection = new AddressSection(this.formId);
   public readonly formNavigation = formNavigation;
}

export const checkoutGuestForm = new CheckoutGuestForm();