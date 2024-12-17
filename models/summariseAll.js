import fs from 'fs/promises'

export default class summariseAll {


    constructor() {
    }

    static async getCsvData() {
        const data = await fs.readFile('./data/Transactions2014.csv', 'utf-8');
        const rows = data.split('\r\n').slice(2)
        let summariseAll = [];
        rows.map(row => {
            const columns = row.split(',');
            summariseAll.push(columns[2], columns[4])
        })
        return summariseAll
    }

    static async getAllCsvData(accountName) {
        const data = await fs.readFile('./data/Transactions2014.csv', 'utf-8');
        const rows = data.split('\r\n')
    
        for (let item of rows) {
            console.log(item)
           
        }

}}