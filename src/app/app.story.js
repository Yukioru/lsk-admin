import React, { Component } from 'react';
import importcss from 'importcss';
import Layout from './components/layout/Layout';



@importcss(require('../sass/AdminLTE.igscss'))
class LayoutStyles extends Component {
  render() {
    return this.props.children;
  }
}
// console.log({styles});
// @importcss(require('./style.css'))
// @importcss(require('./style.ig.scss'))
// @importcss(require('./style.g.scss'))
// @importcss(require('../sass/AdminLTE.ig.scss'))
// class LayoutStyles extends Component {
//   render() {
//     return this.props.children
//   }
// }
module.exports = ({ storiesOf }) => (
  storiesOf('Admin', module)
  .add('Layout', () => (
    <LayoutStyles>
      <Layout>
        KEK
      </Layout>
    </LayoutStyles>
  ))
);
