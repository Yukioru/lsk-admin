import React, { PropTypes } from 'react';
import Link from 'lsk-general/General/Link';

const propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};

function MiniLogo({ children, href }) {
  return (
    <Link className="logo-mini" href={href}>
      {children}
    </Link>
  );
}

MiniLogo.propTypes = propTypes;

export default MiniLogo;
