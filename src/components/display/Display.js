import React from 'react';
import PropTypes from 'prop-types';

import styles from './Display.module.css';

const Display = ({ result }) => (
  <div className={styles.display}>
    <h3 className={styles.result}>{result}</h3>
  </div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
