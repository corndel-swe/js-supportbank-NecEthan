import fs from 'fs/promises'

export default class summariseAll {


    constructor() {
    }

    static async getCsvData() {
        const data = await fs.readFile('./data/Transactions2014.csv', 'utf-8');
        const rows = data.split('\r\n')
        let toNames = [];
        rows.map(row => {
            const columns = row.split(',');
            console.log(columns[2])
            toNames.push(columns[2])
        })
        return data
    }

}