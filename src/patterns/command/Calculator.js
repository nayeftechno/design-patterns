import AddCommand from "./AddCommand";
import SubtractCommand from "./SubtractCommand";
import MultiplyCommand from "./MultiplyCommand";
import AddThenMultiplyCommand from "./AddThenMultiplyCommand";

export default class Calculator {
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

calculator.print();
calculator.excuteCommand(new AddCommand(5));
calculator.print();
calculator.excuteCommand(new SubtractCommand(1));
calculator.print();
calculator.excuteCommand(new MultiplyCommand(4));
calculator.print();
calculator.undoCommand();
calculator.print();
calculator.excuteCommand(new AddThenMultiplyCommand(2, 5));
calculator.print();
calculator.undoCommand();
calculator.print();
