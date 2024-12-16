import { program } from 'commander';
import transactionController from './transactionController.js';
import billController from './billSplitter.js';
import currencyConverterController from './currencyConverterController.js';
import investmentController from './investmentCalc.js'; 
import exchangeRatesController from './exchangeRates.js'; 


program.version('0.1.0').description('SupportBank');

program.addCommand(billController);
program.addCommand(currencyConverterController);
program.addCommand(investmentController); 
program.addCommand(transactionController); 
program.addCommand(exchangeRatesController); 

program.parse(process.argv);
