import React, { useState } from 'react';

import Display from '../display/Display';
import ButtonPanel from '../buttonPanel/ButtonPanel';
import calculate from '../../logic/calculate';
import styles from './App.module.css';

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
      <div className={styles.container}>
        <Display result={result} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
};

export default App;
