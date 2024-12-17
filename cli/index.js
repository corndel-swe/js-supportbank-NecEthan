import { program } from 'commander';
import transactionController from './transactionController.js';
import transactionListController from './transactionListController.js';
import billController from './billSplitter.js';
import currencyConverterController from './currencyConverterController.js';
import investmentController from './investmentCalc.js'; 
import exchangeRatesController from './exchangeRates.js'; 
import cocktailController from './cocktail.js';


program.version('0.1.0').description('SupportBank');

program.addCommand(billController);
program.addCommand(currencyConverterController);
program.addCommand(investmentController); 
program.addCommand(transactionController); 
program.addCommand(exchangeRatesController); 
program.addCommand(transactionListController); 
program.addCommand(cocktailController); 

program.parse(process.argv);
