import React from 'react';

import './Button.scss';
const Button = ({ text, handleClick, className }) => {
  return (
    <button onClick={handleClick} className={`button${className}`}>
      {text}
    </button>
  );
};

export default Button;
