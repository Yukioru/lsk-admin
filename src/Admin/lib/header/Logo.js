import React from 'react';
import PropTypes from 'prop-types';
import Link from '@lskjs/general/Link';

const propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};

function Logo({ children, href }) {
  return (
    <Link className="logo" href={href}>
      {children}
    </Link>
  );
}

Logo.propTypes = propTypes;

export default Logo;
