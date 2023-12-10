class Ploice {
  scream() {
    console.log(`${this.name} can scream`);
  }
}

const humanMixin = {
  walk() {
    console.log(`${this.name} can walk`);
  },
  talk() {
    console.log(`${this.name} can talk`);
  },
  scream: Ploice.prototype.scream,
};

class Employee {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} can eat`);
  }
}

Object.assign(Employee.prototype, humanMixin);

const employee = new Employee("Salim");

console.log(employee);

export default {};
