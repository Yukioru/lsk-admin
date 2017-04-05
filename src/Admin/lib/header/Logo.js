import React, { PropTypes } from 'react';
import Link from 'lsk-general/General/Link';

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
