import fs from 'fs/promises'

export async function readJSONTransactions() {
  // Read the Transactions2013.json file
  // Use JSON.parse to convert the string into an array of objects
  // and return it#

  const data = await fs.readFile('./data/Transactions2013.json', 'utf-8');
  const transactions = JSON.parse(data);
  return transactions;


}
