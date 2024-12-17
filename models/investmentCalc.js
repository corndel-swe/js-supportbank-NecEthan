
export default class InvestmentCalculator {
    static calculateSimpleInterest(principal, rate, years) {
        return principal * (1 + (rate * years) / 100);
    }

}
