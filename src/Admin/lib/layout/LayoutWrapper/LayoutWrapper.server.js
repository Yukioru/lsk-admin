import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
  render() {
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
