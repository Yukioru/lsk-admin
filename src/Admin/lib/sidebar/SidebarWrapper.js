import React, { PropTypes } from 'react';
import cx from 'classnames';

const propTypes = {
  children: PropTypes.node,
};

function SidebarWrapper({ children, className }) {
  return (
    <aside
      className={cx({
        'main-sidebar': true,
        [className]: className,
      })}
    >
      <section className="sidebar">
        {children}
      </section>
    </aside>
  );
}

SidebarWrapper.propTypes = propTypes;

export default SidebarWrapper;
