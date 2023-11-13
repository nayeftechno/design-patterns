import AddCommand from "./AddCommand";
import MultiplyCommand from "./MultiplyCommand";

export default class AddThenMultiplyCommand {
  constructor(valueToAdd, valueToMultiply) {
    this.addCommand = new AddCommand(valueToAdd);
    this.multiplyCommand = new MultiplyCommand(valueToMultiply);
  }

  excute(currentValue) {
    return this.multiplyCommand.excute(this.addCommand.excute(currentValue));
  }
  undo(currentValue) {
    return this.addCommand.undo(this.multiplyCommand.undo(currentValue));
  }
}
