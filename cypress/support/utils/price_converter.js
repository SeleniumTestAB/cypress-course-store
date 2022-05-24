"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.priceConverter = void 0;
const js_big_decimal_1 = __importDefault(require("js-big-decimal"));
class PriceConverter {
    convertFromString(price) {
        return new js_big_decimal_1.default(price.replace(/[€|£|$]?/, ""));
    }
}
exports.priceConverter = new PriceConverter();
