import operate from './operate';

const calculate = (dataObject, buttonName) => {
  const operators = ['+', '-', '÷', 'x', '%'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let { total, next, operation } = dataObject;

  if (buttonName === '+/-') {
    if (next) {
      next = (-1 * parseFloat(next)).toString();
    }
    if (total) {
      total = (-1 * parseFloat(total)).toString();
    }
  }

  if (buttonName === '=' && next && total && operation) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  }

  if (operators.includes(buttonName)) {
    if (buttonName === '%') {
      next = (next *= 0.01).toString();
      operation = null;
    }
    if (total && next && operation) {
      total = operate(total, next, operation);
      operation = buttonName;
      next = null;
    } else if (next && !operation) {
      total = next;
      operation = buttonName;
      next = null;
    } else {
      operation = buttonName;
    }
  }

  if (buttonName === '.') {
    if (next !== null) {
      if (!next.includes('.')) {
        next += '.';
      }
    } else if (!total.includes('.')) {
      total += '.';
    }
  }

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (numbers.includes(buttonName)) {
    if (next && operation) {
      if (operation !== '=') {
        next += buttonName;
      }
    } else if (next) {
      next += buttonName;
      total = null;
    } else {
      next = buttonName;
    }
  }

  return { total, next, operation };
};

export default calculate;
