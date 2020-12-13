import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from '../nav/Nav';
import Home from '../home/Home';
import Quote from '../quote/Quote';
import Calculator from '../calculator/Calculator';

const App = () => (
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

export default App;
