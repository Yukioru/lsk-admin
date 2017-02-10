import React from 'react';

import DashboardIcon from 'react-icons/lib/fa/dashboard';

import LayoutWrapper from './lib/layout/LayoutWrapper';
import PageWrapper from './lib/page/PageWrapper';
import PageHeader from './lib/page/PageHeader';
import Breadcrumb from './lib/page/Breadcrumb';
import PageContent from './lib/page/PageContent';
import HeaderWrapper from './lib/header/HeaderWrapper';
import Logo from './lib/header/Logo';
import MiniLogo from './lib/header/MiniLogo';
import LargeLogo from './lib/header/LargeLogo';
import Navbar from './lib/header/Navbar';
import UserMenu from './lib/header/UserMenu';
import SidebarWrapper from './lib/sidebar/SidebarWrapper';
import UserPanel from './lib/sidebar/UserPanel';
import FooterWrapper from './lib/footer/FooterWrapper';

module.exports = ({ storiesOf, action }) => (
  storiesOf('Admin', module)
  .add('Layout2', () => (
    <LayoutWrapper color="black">
      <HeaderWrapper>
        <Logo>
          <MiniLogo>
            <b>S</b>b
            </MiniLogo>
          <LargeLogo>
            <b>Skill</b>Branch
            </LargeLogo>
        </Logo>
        <Navbar controlbar={false}>
          <UserMenu
            onLinkClick={action('onLinkClick')}
            onButtonClick={action('onButtonClick')}
            image={'https://remont3.ru/templates/umedia/dleimages/noavatar.png'}
            name="John Doe"
            title="Mr. John Doe"
            description="Javascript Full Stack Software Engineer"
            links={[
                { key: 1, text: 'Link 1' },
                { key: 2, text: 'Link 2' },
                { key: 3, text: 'Link 3' },
            ]}
            buttons={[
                { key: 1, text: 'Profile', align: 'left' },
                { key: 2, text: 'Logout' },
            ]}
          />
        </Navbar>
      </HeaderWrapper>
      <SidebarWrapper>
        <UserPanel
          image={'https://remont3.ru/templates/umedia/dleimages/noavatar.png'}
          name="John Doe"
        />
      </SidebarWrapper>
      <PageWrapper>
        <PageHeader
          title="Simple page"
          description="description about the simple page"
        >
          <Breadcrumb
            items={[
                { key: 1, icon: <DashboardIcon />, title: 'Home', url: '/' },
                { key: 2, title: 'Pages' },
                { key: 3, title: 'Simple' },
            ]}
          />
        </PageHeader>
        <PageContent>
          <div className="row">
            <div className="col-sm-6 col-xs-12">
            asdadadads
            </div>
          </div>
        </PageContent>
      </PageWrapper>
      <FooterWrapper>
        <div className="pull-right hidden-xs">
          <b>Version</b> 0.0.1
          </div>
        <strong>
          <span>Copyright &copy; 2016 </span>
          <a href="http://github.com/ucokfm/admin-lte-react">Simple Admin</a>.
          </strong> All rights reserved.
        </FooterWrapper>
    </LayoutWrapper>
  ))
);
