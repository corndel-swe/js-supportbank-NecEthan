import { Command } from 'commander'
import Bill from '../models/bill.js';

const billController = new Command('bill')

billController
  .command('split <amount> <people>')
  .description('Log transaction data to the console')
  .action((amount, people) => {
    const bill = new Bill(parseFloat(amount));
    const pricePerPerson = bill.split(parseInt(people));

    console.log(`each person owes ${pricePerPerson}`)
  })

export default billController
