import React from 'react';
import PropTypes from 'prop-types';

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
