import bigDecimal from "js-big-decimal";

class PriceConverter {
    public convertFromString(price: string):bigDecimal {
        return new bigDecimal(price.replace(/[€|£|$]?/,""));
    }
}

export const priceConverter = new PriceConverter();