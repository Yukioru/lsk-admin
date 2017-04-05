import React, { PropTypes } from 'react';
import Link from 'lsk-general/General/Link';

const propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};

function LargeLogo({ children, href }) {
  return (
    <Link className="logo-lg" href={href}>
      {children}
    </Link>
  );
}

LargeLogo.propTypes = propTypes;

export default LargeLogo;
