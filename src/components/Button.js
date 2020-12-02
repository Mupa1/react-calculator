import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <div>
    <button type="button">
      {name}
    </button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
