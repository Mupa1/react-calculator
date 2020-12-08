import React, { useState } from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    const result = calculate(state, buttonName);
    setState(result);
  };

  const { total, next } = state;
  const result = next || total || '0';

  return (
    <>
      <Display result={result} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
