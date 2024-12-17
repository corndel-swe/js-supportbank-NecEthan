import { Command } from 'commander';
import CurrencyConverter from '../models/currencyConverter.js';

const currencyConverterController = new Command('currency');

currencyConverterController
  .command('convert <amount> <fromCurrency> <toCurrency>') 
  .description('Convert one currency to another')
  .action((amount, fromCurrency, toCurrency) => {
    const convertedAmount = CurrencyConverter.convert(
      parseFloat(amount), 
      fromCurrency, 
      toCurrency
    );
    console.log(`${amount} ${fromCurrency} is equivalent to ${convertedAmount.toFixed(2)} ${toCurrency}`);
  });

export default currencyConverterController;
