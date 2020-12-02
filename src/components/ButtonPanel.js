import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'x'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];

  const groups = [group1, group2, group3, group4, group5];

  return (
    <>
      {groups.map(group => (
        <div key={group}>
          {group.map(char => (
            <Button key={char} name={`${char}`} />
          ))}
        </div>
      ))}
    </>
  );
};

export default ButtonPanel;
