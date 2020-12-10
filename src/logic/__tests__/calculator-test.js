import calculate from '../calculate';

const buttonsArray = buttons => {
  const value = {};
  buttons.forEach(button => {
    Object.assign(value, calculate(value, button));
  });
  Object.keys(value).forEach(key => {
    if (value[key] === null) {
      delete value[key];
    }
  });
  return value;
};

describe('calculate', () => {
  it('should clear the operator when AC is pressed', () => {
    expect(buttonsArray(['6', '+', '7', 'AC'], '+')).toEqual({});
  });

  it('should add numbers', () => {
    expect(buttonsArray(['6', '+', '7', '='], '=')).toEqual({
      total: '13',
    });
  });

  it('should multiply numbers', () => {
    expect(buttonsArray(['6', 'x', '7', '='], '=')).toEqual({
      total: '42',
    });
  });

  it('should divide numbers', () => {
    expect(buttonsArray(['12', '÷', '6', '='], '=')).toEqual({
      total: '2',
    });
  });

  it('should minus numbers', () => {
    expect(buttonsArray(['12', '-', '6', '='], '=')).toEqual({
      total: '6',
    });
  });

  it('should concactenate numbers', () => {
    expect(buttonsArray(['6', '7'], '+')).toEqual({
      next: '67',
    });
  });

  it('should concactenate numbers into floats', () => {
    expect(buttonsArray(['0', '.', '7'], '+')).toEqual({
      next: '0.7',
    });
  });

  it('should add floats', () => {
    expect(buttonsArray(['0', '.', '2', '+', '0', '.', '2', '='], '+')).toEqual({
      total: '0.4',
    });
  });

  it('should not add numbers if no operation is given after a number', () => {
    expect(buttonsArray(['6', '+', '7'], '+')).not.toEqual({
      total: '13',
      next: '7',
      operation: '+',
    });
  });

  it('should show only that one number as next if no other character is given ', () => {
    expect(buttonsArray(['6'])).toEqual({
      next: '6',
    });
  });

  it('should still show the last total if an operation is given after =', () => {
    expect(buttonsArray(['6', '-', '5', '=', '+'], '+')).toEqual({
      total: '1',
      operation: '+',
    });
  });

  it('should have next number as 7 if operation is not given after', () => {
    expect(buttonsArray(['5', '+', '6', '=', '+', '7'], '+')).toEqual({
      total: '11',
      next: '7',
      operation: '+',
    });
  });

  it('should have a total of 18', () => {
    expect(buttonsArray(['3', '+', '6', '=', '+', '9', '='], '=')).toEqual({
      total: '18',
    });
  });

  it('should have + as an operation', () => {
    expect(buttonsArray(['+'], '+')).toEqual({
      operation: '+',
    });
  });

  it('should have - as an operation', () => {
    expect(buttonsArray(['-'], '-')).toEqual({
      operation: '-',
    });
  });

  it('should have x as an operation', () => {
    expect(buttonsArray(['x'], 'x')).toEqual({
      operation: 'x',
    });
  });

  it('should have ÷ as an operation', () => {
    expect(buttonsArray(['÷'], '÷')).toEqual({
      operation: '÷',
    });
  });
});
