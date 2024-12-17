
export default class Bill {

    total;

    constructor(total) {
        this.total = total
    }

    split(people) {
        return this.total / people;
    }
}