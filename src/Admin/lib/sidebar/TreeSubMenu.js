import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  showIcon: PropTypes.bool,
  title: PropTypes.string,
  items: PropTypes.array,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  onItemClick: PropTypes.func,
};

const defaultProps = {
  icon: 'fa fa-circle-o',
  showIcon: true,
  isSelected: false,
  items: [],
};

function renderIcon(icon) {
  if (typeof icon === 'string') {
    return <i className={icon} />;
  }
  return icon;
}

class TreeSubMenu extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItems.bind(this);
  }

  renderItems() {
    if (this.props.items.length > 0) {
      return (
        <ul className="treeview-menu">
          {this.props.items.map((item) => (
            <TreeSubMenu
              {...item}
              onClick={() => this.props.onItemClick(item)}
              onItemClick={this.props.onItemClick}
            />
          ))}
        </ul>
      );
    }

    return '';
  }

  render() {
    const { onClick, url, icon, title } = this.props;
    return (
      <li className={this.props.isSelected ? 'active' : ''}>
        <Link href={url} style={{ cursor: 'pointer' }} onClick={onClick}>
          {this.props.showIcon
            ? renderIcon(icon)
            : ''
          }
          <span> {title} </span>
          {this.props.items.length > 0
            ?
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
            : ''
          }
        </Link>
        {this.renderItems()}
      </li>
    );
  }
}

TreeSubMenu.propTypes = propTypes;
TreeSubMenu.defaultProps = defaultProps;

export default TreeSubMenu;
