import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Display from '../display/Display';
import ButtonPanel from '../buttonPanel/ButtonPanel';
import calculate from '../../logic/calculate';
import styles from './App.module.css';
import Nav from '../nav/Nav';
import Home from '../home/Home';
import Quote from '../quote/Quote';

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

  const Calculator = () => (
    <div className={styles.container}>
      <Display result={result} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/quote" component={Quote} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
