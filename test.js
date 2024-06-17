
const Employee = require('./employee');
const Manager = require('./manager');

const hobbes = new Manager('Hobbes', 1000000, 'Founder');
const calvin = new Manager('Calvin', 130000, 'Director', hobbes);
const susie = new Manager('Susie', 100000, 'TA Manager', calvin);
const lily = new Employee('Lily', 90000, 'TA', susie);
const clifford = new Employee('Clifford', 90000, 'TA', susie);

console.log(`Hobbes bonus: $${hobbes.calculateBonus(0.05)}`);
console.log(`Calvin bonus: $${calvin.calculateBonus(0.05)}`);
console.log(`Susie bonus: $${susie.calculateBonus(0.05)}`);
console.log(`Lily bonus: $${lily.calculateBonus(0.05)}`);
console.log(`Clifford bonus: $${clifford.calculateBonus(0.05)}`);