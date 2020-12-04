import operate from './operate';

const calculate = (dataObject, buttonName) => {
  const operators = ['+', '-', '÷', 'x', '%'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let { total, next, operation } = dataObject;

  if (buttonName === '+/-') {
    if (next !== null) {
      next = (next * -1).toString();
    } else {
      total = (total * -1).toString();
    }
  } else if (buttonName === '=') {
    if (operation !== null && next !== null) {
      total = operate(total, next, operation).toString();
      next = null;
    }
  } else if (operators.includes(buttonName)) {
    if (buttonName === '%') {
      total = String(total);
      next = null;
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
  } else if (buttonName === '.') {
    total = String(total);
    if (next !== null) {
      if (!next.includes('.')) {
        next = next.concat('.').toString();
      }
    } else if (!total.includes('.')) {
      total += '.';
    }
  } else if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (numbers.includes(buttonName)) {
    if (total && operation === null) {
      total = `${total}${buttonName}`;
    } else if (operation === null && total === null) {
      total = buttonName;
    } else if (next) {
      next = `${next}${buttonName}`;
    } else {
      next = buttonName;
    }
  }

  return { total, next, operation };
};

export default calculate;
