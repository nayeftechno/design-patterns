export default class AddCommand {
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
