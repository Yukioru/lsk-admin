import React from 'react';
import Layout from './components/layout/Layout';

module.exports = ({ storiesOf }) => (
  storiesOf('Admin', module)
  .add('Layout', () => (
    <Layout>
      KEK
    </Layout>
  ))
);
