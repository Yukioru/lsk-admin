import React, { PropTypes } from 'react';
import BarsIcon from 'react-icons/lib/fa/bars';
import SlidersIcon from 'react-icons/lib/fa/sliders';

const propTypes = {
  controlbarIcon: PropTypes.node,
  children: PropTypes.node,
};

const defaultProps = {
  controlbarIcon: <SlidersIcon />,
  controlbar: true,
};

function renderIcon(icon) {
  if (typeof icon === 'string') {
    return <i className={icon} />;
  }
  return icon;
}


function Navbar({ controlbarIcon, children, controlbar }) {
  return (
    <nav className="navbar navbar-static-top" role="navigation">
      <a
        className="sidebar-toggle"
        data-toggle="offcanvas"
        role="button"
        style={{ cursor: 'pointer' }}
      >
        <span className="sr-only">Toggle navigation</span>
        <BarsIcon />
      </a>
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          {children}
          <If condition={controlbar}>
            <li>
              <a data-toggle="control-sidebar" style={{ cursor: 'pointer' }}>
                {renderIcon(controlbarIcon)}
              </a>
            </li>
          </If>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
