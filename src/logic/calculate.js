import operate from './operate';

const calculate = (dataObject, buttonName) => {
  const operators = ['+', '-', '÷', 'x', '%'];

  let { total, next, operation } = dataObject;

  if (buttonName === '+/-') {
    if (next !== null) {
      next = (next * -1).toString();
    } else {
      total = (total * -1).toString();
    }
  } else if (buttonName === '=' && next && total && operation) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
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
  } else if (next) {
    if (
      !operators.includes(buttonName)
      && buttonName !== '='
      && buttonName !== '.'
    ) {
      next += buttonName;
    }
  } else {
    next = buttonName;
  }
  return { total, next, operation };
};

export default calculate;
