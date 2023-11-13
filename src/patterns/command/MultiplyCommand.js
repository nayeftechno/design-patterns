export default class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }
  excute(currentValue) {
    return currentValue * this.valueToMultiply;
  }
  undo(currentValue) {
    return currentValue / this.valueToMultiply;
  }
}
