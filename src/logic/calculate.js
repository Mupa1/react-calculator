import operate from './operate';

const calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;
  const operators = ['+', '-', '÷', 'x', '%'];

  if (buttonName === 'AC') {
    total = 0;
    next = null;
    operation = null;
  } else if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (operators.includes(buttonName)) {
    operate(total, next, operation);
  } else if (buttonName === '.' && next) {
    if (!next.includes('.')) {
      next = next.concat('.');
    }
  } else if ((buttonName === '=') && (next && total)) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  }

  return { total, next, operation };
};

export default calculate;
