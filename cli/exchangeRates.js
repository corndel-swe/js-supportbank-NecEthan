import { Command } from 'commander';
import 'dotenv/config';
import ora from 'ora';
import { input } from '@inquirer/prompts';
import chalk from 'chalk';

const dbConfig = {
  api_key: process.env.OPENEXCHANGERATES_API_KEY,
};

export async function getExchangeRates() {
  try {
    const response = await fetch(
      `https://openexchangerates.org/api/latest.json?app_id=${dbConfig.api_key}`
    );
    const data = await response.json();
    return data.rates; 
  } catch (error) {
    throw new Error(`Error fetching exchange rates: ${error.message}`);
  }
}

const exchangeRateController = new Command('exchange');

exchangeRateController
  .command('currency')
  .description('Convert amount from one currency to another')
  .action(async () => {

    const amount = await input(({ message: 'Enter your amount' }));
    const fromCurrency = await input({ message: 'Enter your fromCurrency' });
    const toCurrency = await input({ message: 'Enter your amount toCurrency' });
    const spinner = ora('Loading...').start();

    try {
      const rates = await getExchangeRates();

      const fromRate = rates[fromCurrency];
      const toRate = rates[toCurrency];

      const convertedAmount = (amount / fromRate) * toRate;
        spinner.stop();
      console.log(`${chalk.blue(amount)} ${chalk.green(fromCurrency)} is equivalent to ${chalk.green(convertedAmount.toFixed(2))} ${toCurrency}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  });

export default exchangeRateController;