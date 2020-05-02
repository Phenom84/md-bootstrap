export default class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = '';
    this.result = false;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    if (this.stateIsEqual) {
      this.clear();
      this.stateIsEqual = false;
    }
    this.currentOperand += number;
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.transformDisplayNumber(this.currentOperand);
    this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
  }

  transformDisplayNumber(number) {
    this.transformDisplay = true;
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (Number.isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    }
    return integerDisplay;
  }

  switchOperation(operation) {
    if (this.currentOperand === '') {
      this.operation = operation;
      return;
    }
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.stateIsEqual = false;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let result;
    const previous = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (Number.isNaN(current) || Number.isNaN(previous)) return;
    switch (this.operation) {
      case '+': result = previous + current;
        break;
      case '-': result = previous - current;
        break;
      case '*': result = previous * current;
        break;
      case '÷': result = previous / current;
        break;
      default:
        break;
    }
    this.currentOperand = result;
    this.previousOperand = '';
    this.operation = '';
  }
}
