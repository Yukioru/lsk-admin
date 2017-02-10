import React, { PropTypes } from 'react';

const propTypes = {
  href: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

function renderIcon(icon) {
  if (typeof icon === 'string') {
    return <i className={icon} />;
  }
  return icon;
}

function TabIcon({ href, icon }) {
  return (
    <li>
      <a href={href} data-toggle="tab">
        {renderIcon(icon)}
      </a>
    </li>
  );
}

TabIcon.propTypes = propTypes;

export default TabIcon;
