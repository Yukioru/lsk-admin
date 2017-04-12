import React, { PropTypes } from 'react';
import GroupIcon from 'react-icons2/fa/group';

const propTypes = {
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

const defaultProps = {
  icon: <GroupIcon />,
  iconColor: 'aqua',
};

function renderIcon(icon) {
  if (typeof icon === 'string') {
    return <i className={icon} />;
  }
  return icon;
}

function NotificationsMenuItem({ icon, iconColor, children, onClick }) {
  return (
    <li>
      <a style={{ cursor: 'pointer' }} onClick={onClick}>
        <i className={`text-${iconColor}`}>{renderIcon(icon)}</i> {children}
      </a>
    </li>
  );
}

NotificationsMenuItem.propTypes = propTypes;
NotificationsMenuItem.defaultProps = defaultProps;

export default NotificationsMenuItem;
