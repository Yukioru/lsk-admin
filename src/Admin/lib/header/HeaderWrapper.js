import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

function HeaderWrapper({ children, className }) {
  return (
    <header
      className={cx({
        'main-header': true,
        [className]: className,
      })}
    >
      {children}
    </header>
  );
}

HeaderWrapper.propTypes = propTypes;

export default HeaderWrapper;
