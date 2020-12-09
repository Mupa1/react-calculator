import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Nav.module.css';

const Nav = () => (
  <nav>
    <h1>Math Magicians</h1>
    <ul className={styles.navLinks}>
      <Link className={styles.navLink} to="/">
        <li>Home</li>
      </Link>
      <Link className={styles.navLink} to="/calculator">
        <li>Calculator</li>
      </Link>
      <Link className={styles.navLink} to="/">
        <li>Quote</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
