import { Command } from 'commander'
import summariseAll from '../models/summariseAll.js'

const transactionController = new Command('transaction')

transactionController
  .command('summarise all')
  .description('Log transaction data to the console')
  .action(async () => {
    const results = await summariseAll.getCsvData();
    console.log(results)
  })

export default transactionController
