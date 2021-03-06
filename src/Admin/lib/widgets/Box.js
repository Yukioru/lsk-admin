import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MinusIcon from 'react-icons2/fa/minus';
import CloseIcon from 'react-icons2/fa/close';
import PlusIcon from 'react-icons2/fa/plus';

const propTypes = {
  title: PropTypes.string,
  status: PropTypes.string,
  solid: PropTypes.bool,
  expandable: PropTypes.bool,
  removable: PropTypes.bool,
  collapsed: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  status: 'default',
  solid: false,
  expandable: false,
  removable: false,
  collapsed: false,
  loading: false,
};

class Box extends Component {
  getClasses() {
    return classNames(
      'box',
      `box-${this.props.status}`,
      { 'box-solid': this.props.solid },
      { 'collapsed-box': this.props.collapsed }
    );
  }

  renderExpandButton() {
    if (this.props.expandable) {
      return (
        <button
          type="button"
          className="btn btn-box-tool"
          data-widget="collapse"
        >
          {this.props.collapsed
            ? <PlusIcon />
            : <MinusIcon />
          }
        </button>
      );
    }
    return '';
  }

  renderRemoveButton() {
    if (this.props.removable) {
      return (
        <button
          type="button"
          className="btn btn-box-tool"
          data-widget="remove"
        >
          <CloseIcon />
        </button>
      );
    }
    return '';
  }

  renderLoading() {
    if (this.props.loading) {
      return (
        <div className="overlay">
          <i className="fa fa-refresh fa-spin" />
        </div>
      );
    }
    return '';
  }

  render() {
    return (
      <div className={this.getClasses()}>
        <div className="box-header with-border">
          <h3 className="box-title">{this.props.title}</h3>

          <div className="box-tools pull-right">
            {this.renderExpandButton()}
            {this.renderRemoveButton()}
          </div>
        </div>
        <div className="box-body">
          {this.props.children}
        </div>
        {this.renderLoading()}
      </div>
    );
  }
}

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
