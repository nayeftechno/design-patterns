export default class DivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide;
  }
  excute(currentValue) {
    return currentValue / this.valueToDivide;
  }
  undo(currentValue) {
    return currentValue * this.valueToDivide;
  }
}
