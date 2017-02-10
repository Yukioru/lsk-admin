import React from 'react';
import CircleIcon from 'react-icons/lib/fa/circle';

import UserPanel from '../../../lib/sidebar/UserPanel';

const user = {
  name: 'Alexander Pierce',
  title: 'Web Developer',
  joined: 'Nov. 2012',
  avatar: 'node_modules/admin-lte/dist/img/user2-160x160.jpg',
  isOnline: true,
};


export default function () {
  const onlineIcon = <i className="text-success"><CircleIcon /></i>;
  const offlineIcon = <i className="text-danger"><CircleIcon /></i>;
  const statusIcon = user.isOnline ? onlineIcon : offlineIcon;
  const statusText = user.isOnline ? 'Online' : 'Offline';
  return (
    <UserPanel
      image={user.avatar}
      name={user.name}
      statusIcon={statusIcon}
      statusText={statusText}
    />
  );
}
