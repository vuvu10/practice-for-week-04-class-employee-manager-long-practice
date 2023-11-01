// CLASS MANAGER 

const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager) {
        super(name, salary, title, manager);
        this.employees = [];
    }
}


const splinter = new Manager('Splinter', 100000, 'Sensei');
console.log(splinter);