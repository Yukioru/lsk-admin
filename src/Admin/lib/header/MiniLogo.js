import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

function MiniLogo({ children, onClick }) {
  return (
    <span className="logo-mini" onClick={onClick}>
      {children}
    </span>
  );
}

MiniLogo.propTypes = propTypes;

export default MiniLogo;
