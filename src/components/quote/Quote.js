import React from 'react';

import styles from './Quote.module.css';

const Quote = () => (
  <>
    <h2 className={styles.quote}>
      Mathematics is not about numbers, equations, computations, or algorithms:
      {' '}
      <br />
      it is about understanding. –William Paul Thurston
    </h2>
  </>
);

export default Quote;
