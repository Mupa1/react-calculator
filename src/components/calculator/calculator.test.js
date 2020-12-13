import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';

import Calculator from './Calculator';

it('renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

const clickButton = buttons => {
  const value = '';
  buttons.forEach(button => {
    Object.assign(value, fireEvent.click(screen.getByText(button)));
  });
  return value;
};

const total = resultTotal => {
  expect(screen.getByRole('heading')).toHaveTextContent(resultTotal);
};

describe('Calculator', () => {
  test('addition', () => {
    render(<Calculator />);
    clickButton(['6', '+', '7', '=']);
    total('13');
  });

  test('multiplication', () => {
    render(<Calculator />);
    clickButton(['9', 'x', '8', '=']);
    total('72');
  });

  test('division', () => {
    render(<Calculator />);
    clickButton(['8', '÷', '4', '=']);
    total('2');
  });

  test('subtraction', () => {
    render(<Calculator />);
    clickButton(['8', '-', '4', '=']);
    total('4');
  });

  test('calculate numbers with decimals', () => {
    render(<Calculator />);
    clickButton(['1', '.', '2', '+', '1', '.', '2', '=']);
    total('2.4');
  });

  test('calculate modulus', () => {
    render(<Calculator />);
    clickButton(['1', '0', '0', '%']);
    total('1');
  });

  test('+/- should toggle from positive to negative number', () => {
    render(<Calculator />);
    clickButton(['7', '+/-']);
    total('-7');
  });

  test('+/- should toggle from negative and positive number', () => {
    render(<Calculator />);
    clickButton(['7', '+/-', '+/-']);
    total('7');
  });

  test('clear the operation when AC is pressed', () => {
    render(<Calculator />);
    clickButton(['7', '+/-', '+/-', 'AC']);
    total('0');
  });
});
