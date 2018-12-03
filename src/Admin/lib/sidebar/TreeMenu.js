import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowLeft from 'react-icons2/fa/angle-left';
import TreeSubMenu from './TreeSubMenu';
import cx from 'classnames';
import Link from 'lsk-general/General/Link';

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
  pageUrl: PropTypes.string,
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
  handleSelected(url) {
    this.setState({
      selectedUrl: url,
    });
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
    const { onClick, url, title, iconColor, icon } = this.props;
    return (
      <Link href={url} style={{ cursor: 'pointer' }} onClick={onClick}>
        <i className={`text-${iconColor}`}>
          {renderIcon(icon)}
        </i>
        <span className="pull-right-container">
          {this.renderLabel()}
        </span>
        <span> {title} </span>
      </Link>
    );
  }

  renderItems() {
    if (this.props.items.length > 0) {
      return (
        <ul className="treeview-menu">
          {this.props.items.map((item, i) => {
            const isSelected = item.url === this.props.pageUrl;
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
          active: this.props.isSelected
            || this.props.items.map(o => o.url).includes(this.props.pageUrl),
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
