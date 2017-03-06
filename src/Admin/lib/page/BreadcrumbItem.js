import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Link from 'lsk-general/General/Link';

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
        ? <Link href={url}>{icon ? renderIcon(icon) : ''} {title}</Link>
        : title
      }
    </li>
  );
}

BreadcrumbItem.propTypes = propTypes;

export default BreadcrumbItem;
