"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFakeUser = void 0;
const faker_1 = __importDefault(require("faker"));
const merge_partially_1 = require("merge-partially");
const makeFakeUser = (override) => {
    faker_1.default.setLocale('en');
    const seed = {
        firstName: faker_1.default.name.firstName(),
        lastName: faker_1.default.name.lastName(),
        email: faker_1.default.internet.email(),
        address: {
            firstAddress: faker_1.default.address.secondaryAddress(),
            street: faker_1.default.address.streetName(),
            city: faker_1.default.address.city(),
            region: faker_1.default.datatype.number(4),
            zipCode: faker_1.default.address.zipCode(),
            country: faker_1.default.address.country()
        },
    };
    return merge_partially_1.mergePartially.deep(seed, override);
};
exports.makeFakeUser = makeFakeUser;
