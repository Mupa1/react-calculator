import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import App from './App';

it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  });
});
