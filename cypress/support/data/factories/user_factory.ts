
import faker from 'faker';
import { mergePartially, NestedPartial } from 'merge-partially';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  address: {
    firstAddress: string;
    street: string;
    city: string;
    region: number;
    zipCode: string;
    country: string;
  };
}
export const makeFakeUser = (override?: NestedPartial<IUser>): IUser=> {
    faker.setLocale('en');
    const seed: IUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        address:{
            firstAddress: faker.address.secondaryAddress(),
            street: faker.address.streetName(),
            city: faker.address.city(),
            region: faker.datatype.number(4),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        },
    }
    return mergePartially.deep(seed, override);
}