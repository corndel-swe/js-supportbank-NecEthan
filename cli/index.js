import { program } from 'commander';
import transactionController from './transaction.js';
import billController from './billSplitter.js';
import currencyConverterController from './currencyConverterController.js';
import investmentController from './investmentCalc.js'; 
program.version('0.1.0').description('SupportBank');

program.addCommand(transactionController);
program.addCommand(billController);
program.addCommand(currencyConverterController);
program.addCommand(investmentController); 

program.parse(process.argv);
