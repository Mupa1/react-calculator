import React from 'react';

import styles from './Home.module.css';

const Home = () => (
  <div className={styles.home}>
    <h2>Welcome to our page!</h2>
    <p>
      Math Magicians lets you do fun basic calculations.
    </p>
    <p>
      Click on the Calculator link to do some math.
    </p>
  </div>
);

export default Home;
