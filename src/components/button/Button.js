import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({
  name, clickHandler, wide, color,
}) => {
  const handleClick = buttonName => clickHandler(buttonName);

  return (
    <button
      type="button"
      onClick={() => handleClick(name)}
      className={`${styles.button} ${wide && styles.wide} ${color ? styles.gray : styles.orange}`}
    >
      {name}
    </button>
  );
};

Button.defaultProps = {
  wide: false,
  color: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.bool,
};

export default Button;
