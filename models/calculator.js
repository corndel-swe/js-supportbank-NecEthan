
export default class InvestmentCalculator {
    static calculateSimpleInterest(principal, rate, time) {
      const amount = principal * (1 + (rate / 100) * time);
      return amount;
    }
  
    static calculateCompoundInterest(principal, rate, time) {
      const amount = principal * Math.pow((1 + (rate / 100)), time);
      return amount;
    }
  }
  