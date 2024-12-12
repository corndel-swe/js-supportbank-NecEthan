import { Command } from 'commander'
import summariseAll from '../models/summariseAll.js'

const transactionController = new Command('transaction')

transactionController
  .command('summarise all')
  .description('Log transaction data to the console')
  .action(() => {
    const test = summariseAll.getCsvData();
    console.log(test)
  })

export default transactionController
