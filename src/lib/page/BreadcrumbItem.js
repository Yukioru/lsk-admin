import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.string,
  url: PropTypes.string,
};

function renderIcon(icon) {
  if (typeof icon === 'string') {
    return <i className={icon} />;
  }
  return icon;
}

function BreadcrumbItem({ icon, title, url }) {
  return (
    <li className={classNames({ active: !url })}>
      {url
        ? <a href={url}>{icon ? renderIcon(icon) : ''} {title}</a>
        : title
      }
    </li>
  );
}

BreadcrumbItem.propTypes = propTypes;

export default BreadcrumbItem;
