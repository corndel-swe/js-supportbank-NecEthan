import { Command } from 'commander';
import summariseAll from '../models/summariseAll.js';

const transactionListController = new Command('transactionList');

transactionListController
  .command('list <accountName>')
  .description('List all transactions for a specific account')
  .action(async (accountName) => {
    const results = await summariseAll.getAllCsvData(accountName);
    
    if (results && results.length > 0) {
      results.forEach((transaction) => {
        console.log(`Date: ${transaction.date}, Narrative: ${transaction.narrative}`);
      });
    } else {
      console.log(`No transactions found for account: ${accountName}`);
    }
  });

export default transactionListController;
