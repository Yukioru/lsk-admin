import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import $ from 'jquery';
global.$ = $;
global.jQuery = $;
require('./jquery-ui.min');
window.$.widget.bridge('uibutton', window.$.ui.button);
require('admin-lte/bootstrap/js/bootstrap.min');
require('admin-lte/plugins/sparkline/jquery.sparkline.min');
require('admin-lte/plugins/jvectormap/jquery-jvectormap-1.2.2.min');
require('admin-lte/plugins/jvectormap/jquery-jvectormap-world-mill-en');
require('admin-lte/plugins/knob/jquery.knob');
require('moment');
require('admin-lte/plugins/daterangepicker/daterangepicker');
require('admin-lte/plugins/datepicker/bootstrap-datepicker');
require('admin-lte/plugins/slimScroll/jquery.slimscroll.min');
require('admin-lte/dist/js/app.min');


const propTypes = {
  color: PropTypes.string,
  fixed: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  color: 'black',
  fixed: false,
};

class LayoutWrapper extends Component {
  componentWillMount() {
    const classnames = classNames(
      { 'hold-transition': this.props.fixed },
      `skin-${this.props.color}`,
      { fixed: this.props.fixed },
      'sidebar-mini',
    );
    if (typeof window !== 'undefined') {
      window.$('body').addClass(classnames);
    }
  }

  render() {
    global.kek = 'kek3ß';
    return (
      <div className="wrapper">
        {this.props.children}
        <div className="control-sidebar-bg" />
      </div>
    );
  }
}

LayoutWrapper.propTypes = propTypes;
LayoutWrapper.defaultProps = defaultProps;

export default LayoutWrapper;
