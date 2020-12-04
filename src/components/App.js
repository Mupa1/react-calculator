import React from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = buttonName => {
    const result = calculate(this.state, buttonName);
    this.setState(result);
  }

  render() {
    const { total, next } = this.state;
    const result = next || total || '0';

    return (
      <>
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
