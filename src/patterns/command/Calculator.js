class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }
  excute(currentValue) {
    return currentValue + this.valueToAdd;
  }
  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }
  excuteCommand(command) {
    this.value = command.excute(this.value);
    this.history.push(command);
  }
  undoCommand() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }
  print() {
    console.log(`Value is :${this.value}`);
  }
}

const calculator = new Calculator();
calculator.excuteCommand(new AddCommand(5));
calculator.print();
calculator.excuteCommand(new AddCommand(4));
calculator.print();
calculator.undoCommand();

calculator.print();

export default Calculator;
