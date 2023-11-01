// EMPLOYEE CLASS

class Employee {
    constructor(name, salary, title, manager) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;

        if (this.manager instanceof Employee) {
            manager.addEmployee.(this);
        }
    }

    calculateBonus(multiplier) {
        if(!Number.isFinite(multiplier)) {
            throw new Error('Multiplier must be a number');
        }
        return  this.salary * multiplier;
    }
    
}

Module.exports = Employee;