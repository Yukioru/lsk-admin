import React from 'react';
import SidebarWrapper from '../../../lib/sidebar/SidebarWrapper';

import UserPanel from '../../containers/sidebar/UserPanel';
import SidebarSearch from '../../containers/sidebar/SidebarSearch';
import SidebarMenu from '../../containers/sidebar/SidebarMenu';

module.exports = ({ storiesOf, action }) => (
  storiesOf('admin.layout', module)
  .add('SidebarWrapper', () => (
    <SidebarWrapper>
      <UserPanel />
      <SidebarSearch />
      <SidebarMenu />
    </SidebarWrapper>
  ))
);
