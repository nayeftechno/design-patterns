/* eslint-disable default-case */
const Types = {
  DEVELOPER: "developer",
  TESTER: "teseter",
};

class Developer {
  constructor(name) {
    this.name = name;
    this.type = Types.DEVELOPER;
  }
}

class Tester {
  constructor(name) {
    this.name = name;
    this.type = Types.TESTER;
  }
}

class EmployeeFactory {
  constructor() {
    this.employees = [];
  }

  create(name, type) {
    let emp = null;
    switch (type) {
      case Types.DEVELOPER:
        emp = new Developer(name);
        this.employees.push(emp);
        return emp;

      case Types.TESTER:
        emp = new Tester(name);
        this.employees.push(emp);
        return emp;
    }
  }
}

function print(idx) {
  console.log(`${idx + 1} - Welcome ${this.name}, your type is (${this.type})`);
}

const factory = new EmployeeFactory();

factory.create("Ali", Types.DEVELOPER);
factory.create("Omar", Types.DEVELOPER);
factory.create("Daoud", Types.TESTER);
factory.create("Reem", Types.TESTER);
factory.create("Salim", Types.DEVELOPER);

factory.employees?.forEach((emp, idx) => {
  print.call(emp, idx);
});
