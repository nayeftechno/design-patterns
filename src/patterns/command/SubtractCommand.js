export default class SubtractCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }
  excute(currentValue) {
    return currentValue - this.valueToSubtract;
  }
  undo(currentValue) {
    return this.valueToSubtract + currentValue;
  }
}
