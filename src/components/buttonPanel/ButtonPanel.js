import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';
import styles from './ButtonPanel.module.css';

const ButtonPanel = props => {
  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'x'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];

  const groups = [group1, group2, group3, group4, group5];

  const orangeButtons = ['÷', 'x', '-', '+', '='];

  const handleClick = buttonName => {
    props.clickHandler(buttonName);
  };

  return (
    <>
      {groups.map(group => (
        <div key={group} className={styles.row}>
          {group.map(char => (
            <Button
              key={char}
              name={`${char}`}
              clickHandler={handleClick}
              wide={char === '0'}
              color={!orangeButtons.includes(char)}
            />
          ))}
        </div>
      ))}
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
