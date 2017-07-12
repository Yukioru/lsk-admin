import React, { PropTypes } from 'react';
import cx from 'classnames';

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
