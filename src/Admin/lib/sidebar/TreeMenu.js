import React, { Component, PropTypes } from 'react';
import ArrowLeft from 'react-icons/lib/fa/angle-left';
import TreeSubMenu from './TreeSubMenu';
import cx from 'classnames';

const propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconColor: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  labelColor: PropTypes.string,
  showLabel: PropTypes.bool,
  items: PropTypes.array,
  onClick: PropTypes.func,
  onItemClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

const defaultProps = {
  icon: 'fa fa-circle-o',
  showLabel: true,
  items: [],
};

function renderIcon(icon) {
  if (typeof icon === 'string') {
    return <i className={icon} />;
  }
  return icon;
}

class TreeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenuId: null,
      selectedLinkId: null,
    };
    this.renderLabel = this.renderLabel.bind(this);
    this.renderLink = this.renderLink.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  handleMenuClick(menu) {
    this.setState({
      selectedMenuId: menu.id,
    });
    this.props.onItemClick(menu);
  }

  renderLabel() {
    if (this.props.showLabel === false) {
      return '';
    }
    if (this.props.label) {
      if (this.props.labelColor) {
        return (
          <small className={`label pull-right bg-${this.props.labelColor}`}>
            {this.props.label}
          </small>
        );
      }

      return (
        <small className="label label-primary pull-right">
          {this.props.label}
        </small>
      );
    }
    return <i className="pull-right"><ArrowLeft /></i>;
  }

  renderLink() {
    return (
      <a style={{ cursor: 'pointer' }} onClick={this.props.onClick}>
        <i className={`text-${this.props.iconColor}`}>
          {renderIcon(this.props.icon)}
        </i>
        <span className="pull-right-container">
          {this.renderLabel()}
        </span>
        <span> {this.props.title} </span>
      </a>
    );
  }

  renderItems() {
    if (this.props.items.length > 0) {
      return (
        <ul className="treeview-menu">
          {this.props.items.map((item, i) => {
            item.id = i + 1;
            const isSelected = item.id === this.state.selectedMenuId;
            return (
              <TreeSubMenu
                key={i}
                {...item}
                isSelected={isSelected}
                onClick={() => this.handleMenuClick(item)}
                onItemClick={() => this.handleMenuClick(item)}
              />
            );
          })}
        </ul>
      );
    }

    return '';
  }

  render() {
    return (
      <li
        className={cx({
          treeview: true,
          active: this.props.isSelected,
        })}
      >
        {this.renderLink()}
        {this.renderItems()}
      </li>
    );
  }
}

TreeMenu.propTypes = propTypes;
TreeMenu.defaultProps = defaultProps;

export default TreeMenu;
