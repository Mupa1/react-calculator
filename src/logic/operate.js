import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let result;

  if (operation === '+') {
    result = num1.plus(num2).toString();
  }
  if (operation === '-') {
    result = num1.minus(num2).toString();
  }
  if (operation === 'x') {
    result = num1.times(num2).toString();
  }
  if (operation === '÷') {
    result = num1.div(num2).toString();
  }
  if (operation === '%') {
    result = num1.mod(num2).toString();
  }
  return result;
};

export default operate;
