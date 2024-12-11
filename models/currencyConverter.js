
export default class CurrencyConverter {
    static exchangeRateUSDToGBP = 0.82; 

    static convert(amount) {
        return amount * this.exchangeRateUSDToGBP;
    }
}
