import { Command } from 'commander';
import InvestmentCalculator from '../models/calculator.js';

const investmentController = new Command('invest');

investmentController
  .command('simple <amount> <rate> <years>')
  .description('Calculate simple interest on an investment')
  .action((amount, rate, years) => {
    const principal = parseFloat(amount);
    const interestRate = parseFloat(rate);
    const timeInYears = parseInt(years);

    const projectedValue = InvestmentCalculator.calculateSimpleInterest(principal, interestRate, timeInYears);
    console.log(`With simple interest, £${principal} at ${interestRate}% for ${timeInYears} years will be worth £${projectedValue.toFixed(2)}`);
  });

export default investmentController;
