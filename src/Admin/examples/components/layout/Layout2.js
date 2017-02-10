import React, { PropTypes } from 'react';
import css from 'importcss';

import LayoutWrapper from '../../../lib/layout/LayoutWrapper';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Controlbar from './Controlbar';

const propTypes = {
  children: PropTypes.node,
};


// import '../../../sass/AdminLTE.scss';
require('../../../sass/AdminLTE.g.scss');

export default function Layout({ children }) {
  return (
    <LayoutWrapper color="black">
      <Header />
      <Sidebar />
      {children}
      <Footer />
      <Controlbar />
    </LayoutWrapper>
  );
}

Layout.propTypes = propTypes;
