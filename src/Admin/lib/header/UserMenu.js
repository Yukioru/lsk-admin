import React, { PropTypes } from 'react';

import Avatar from 'lsk-general/General/Avatar';

import UserMenuBody from './UserMenuBody';
import UserMenuLink from './UserMenuLink';
import UserMenuFooter from './UserMenuFooter';
import UserMenuButton from './UserMenuButton';

const propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.array,
  buttons: PropTypes.array,
  onLinkClick: PropTypes.func,
  onButtonClick: PropTypes.func,
};

const defaultProps = {
  image: '/images/no-avatar.png',
  name: 'Full Name',
  title: 'Title',
  description: 'Description',
  links: [],
  buttons: [],
};

function UserMenu({
  image, name, title, description,
  links, buttons,
  onLinkClick, onButtonClick,
}) {
  return (
    <li className="dropdown user user-menu">
      <a
        className="dropdown-toggle"
        data-toggle="dropdown"
        style={{ cursor: 'pointer' }}
      >
        <Avatar
          className="user-image"
          src={image}
          title="User"
          size={25}
        />
        <span className="hidden-xs">{name}</span>
      </a>
      <ul className="dropdown-menu">
        <li className="user-header">
          <Avatar
            src={image}
            title="User"
            size={90}
          />
          <p>
            {title}
            <small>{description}</small>
          </p>
        </li>
        <UserMenuBody>
          {links.map(link =>
            <UserMenuLink
              {...link}
              onClick={() => onLinkClick(link)}
            />
          )}
        </UserMenuBody>
        <UserMenuFooter>
          {buttons.map(button =>
            <UserMenuButton
              {...button}
              onClick={() => onButtonClick(button)}
            />
          )}
        </UserMenuFooter>
      </ul>
    </li>
  );
}

UserMenu.propTypes = propTypes;
UserMenu.defaultProps = defaultProps;

export default UserMenu;
