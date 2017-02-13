import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

function LargeLogo({ children, onClick }) {
  return (
    <span className="logo-lg" onClick={onClick}>
      {children}
    </span>
  );
}

LargeLogo.propTypes = propTypes;

export default LargeLogo;
