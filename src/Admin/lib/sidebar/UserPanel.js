import React, { PropTypes } from 'react';
import CircleIcon from 'react-icons2/fa/circle';
import Avatar from 'lsk-general/General/Avatar';

const propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  statusIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  statusText: PropTypes.string,
};

const defaultProps = {
  image: '/images/no-avatar.png',
  name: 'Full Name',
  statusIcon: <i className="text-success"><CircleIcon /></i>,
  statusText: 'Online',
};

function renderIcon(icon) {
  if (typeof icon === 'string') {
    return <i className={icon} />;
  }
  return icon;
}

function UserPanel({ image, name, statusIcon, statusText }) {
  return (
    <div className="user-panel">
      <div className="pull-left image" style={{ display: 'table' }}>
        <Avatar src={image} title="User"
          style={{ width: '100%', height: 'auto' }}
          innerStyle={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="pull-left info">
        <p>{name}</p>
        <a>{renderIcon(statusIcon)} {statusText}</a>
      </div>
    </div>
  );
}

UserPanel.propTypes = propTypes;
UserPanel.defaultProps = defaultProps;

export default UserPanel;
