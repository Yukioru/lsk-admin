import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import $ from 'jquery';

const propTypes = {
  color: PropTypes.string,
  fixed: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  color: 'blue',
  fixed: false,
};

class LayoutWrapper extends Component {
  componentWillMount() {
    const classnames = classNames(
      { 'hold-transition': this.props.fixed },
      `skin-${this.props.color}`,
      { fixed: this.props.fixed },
      'sidebar-mini'
    );
    if (typeof window !== 'undefined') {
      $('body').addClass(classnames);
    }
  }

  render() {
    return (
      <div className="wrapper">
        {this.props.children}
        <div className="control-sidebar-bg"></div>
      </div>
    );
  }
}

LayoutWrapper.propTypes = propTypes;
LayoutWrapper.defaultProps = defaultProps;

export default LayoutWrapper;
