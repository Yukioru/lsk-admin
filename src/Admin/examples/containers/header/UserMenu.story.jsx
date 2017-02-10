import React from 'react';

import UserMenu from '../../../lib/header/UserMenu';


module.exports = ({ storiesOf, action, knob }) => (
  storiesOf('admin.container', module)
  .add('UserMenu', () => {
    const user = {
      name: knob.text('name', 'Alexander Pierce'),
      title: knob.text('title', 'Web Developer'),
      joined: knob.text('joined', 'Nov. 2012'),
      avatar: knob.text('avatar', require('admin-lte/dist/img/user2-160x160.jpg')),
      online: knob.boolean('online', true),
    };

    return (<UserMenu
      image={user.avatar}
      name={user.name}
      title={`${user.name} - ${user.title}`}
      description={`Member since ${user.joined}`}
      links={[
        { key: 1, text: 'Followers', url: '/followers' },
        { key: 2, text: 'Sales', url: '/sales' },
        { key: 3, text: 'Friends', url: '/friends' },
      ]}
      buttons={[
        { key: 1, text: 'Profile', align: 'left' },
        { key: 2, text: 'Sign out' },
      ]}
      onLinkClick={action('onLinkClick')}
      onButtonClick={action('onButtonClick')}
    />);
  })
);
