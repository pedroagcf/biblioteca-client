import React from 'react';

import './Button.scss';
const Button = ({ text, handleClick, className, type }) => {
  return (
    <button type={type} onClick={handleClick} className={`button${className}`}>
      {text}
    </button>
  );
};

export default Button;
