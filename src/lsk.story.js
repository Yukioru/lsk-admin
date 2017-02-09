import React, { Component } from 'react';
import importcss from 'importcss';

import HomeIcon from 'react-icons/lib/fa/home';
import SlidersIcon from 'react-icons/lib/fa/sliders';
import CakeIcon from 'react-icons/lib/fa/birthday-cake';
import UserIcon from 'react-icons/lib/fa/user';
import MailIcon from 'react-icons/lib/fa/envelope';
import FileCodeIcon from 'react-icons/lib/fa/file-code-o';
import DashboardIcon from 'react-icons/lib/fa/dashboard';
import TrashIcon from 'react-icons/lib/fa/trash';

import LayoutWrapper from './lib/layout/LayoutWrapper';
import PageWrapper from './lib/page/PageWrapper';
import PageHeader from './lib/page/PageHeader';
import Breadcrumb from './lib/page/Breadcrumb';
import PageContent from './lib/page/PageContent';
import Box from './lib/widgets/Box';
import HeaderWrapper from './lib/header/HeaderWrapper';
import Logo from './lib/header/Logo';
import MiniLogo from './lib/header/MiniLogo';
import LargeLogo from './lib/header/LargeLogo';
import Navbar from './lib/header/Navbar';
import MessagesMenu from './lib/header/MessagesMenu';
import NotificationsMenu from './lib/header/NotificationsMenu';
import TasksMenu from './lib/header/TasksMenu';
import UserMenu from './lib/header/UserMenu';
import SidebarWrapper from './lib/sidebar/SidebarWrapper';
import UserPanel from './lib/sidebar/UserPanel';
import FooterWrapper from './lib/footer/FooterWrapper';
import ControlbarWrapper from './lib/controlbar/ControlbarWrapper';
import TabHeader from './lib/controlbar/TabHeader';
import TabIcon from './lib/controlbar/TabIcon';
import TabContent from './lib/controlbar/TabContent';
import TabPane from './lib/controlbar/TabPane';

const noAvatar = 'https://remont3.ru/templates/umedia/dleimages/noavatar.png';

@importcss(require('./sass/AdminLTE.igscss'))
class LayoutStyles extends Component {
  render() {
    return this.props.children;
  }
}
// console.log({styles});
// @importcss(require('./style.css'))
// @importcss(require('./style.ig.scss'))
// @importcss(require('./style.g.scss'))
// @importcss(require('../sass/AdminLTE.ig.scss'))
// class LayoutStyles extends Component {
//   render() {
//     return this.props.children
//   }
// }
module.exports = ({ storiesOf, action }) => (
  storiesOf('Admin', module)
  .add('Layout', () => (
    <LayoutStyles>
      <LayoutWrapper color="black">
        <HeaderWrapper>
          <Logo>
            <MiniLogo>
              <b>S</b>im
            </MiniLogo>
            <LargeLogo>
              <b>Simple</b>Admin
            </LargeLogo>
          </Logo>
          <Navbar>
            <MessagesMenu
              onFooterClick={action('onFooterClick')}
            />
            <NotificationsMenu
              onFooterClick={action('onFooterClick')}
            />
            <TasksMenu
              onFooterClick={action('onFooterClick')}
            />
            <UserMenu
              onLinkClick={action('onLinkClick')}
              onButtonClick={action('onButtonClick')}
              image={noAvatar}
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
            image={noAvatar}
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
                <Box
                  title="Hello, World!"
                  status="primary"
                  expandable
                  removable
                >
                  You can collapse or close this box window using right upper buttons.
                </Box>
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
        <ControlbarWrapper>
          <TabHeader>
            <TabIcon href="#control-sidebar-home-tab" icon={<HomeIcon />} />
            <TabIcon href="#control-sidebar-settings-tab" icon={<SlidersIcon />} />
          </TabHeader>
          <TabContent>
            <TabPane id="control-sidebar-home-tab">
              <h3 className="control-sidebar-heading">Recent Activity</h3>
              <ul className="control-sidebar-menu">
                <li>
                  <a href="">
                    <i className="menu-icon bg-red"><CakeIcon /></i>
                    <div className="menu-info">
                      <h4 className="control-sidebar-subheading">
                        Langdon's Birthday
                      </h4>
                      <p>Will be 23 on April 24th</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="menu-icon bg-yellow"><UserIcon /></i>
                    <div className="menu-info">
                      <h4 className="control-sidebar-subheading">
                        Frodo Updated His Profile
                      </h4>
                      <p>New phone +1(800)555-1234</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="menu-icon bg-light-blue"><MailIcon /></i>
                    <div className="menu-info">
                      <h4 className="control-sidebar-subheading">
                        Nora Joined Mailing List
                      </h4>
                      <p>nora@example.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="menu-icon bg-green"><FileCodeIcon /></i>
                    <div className="menu-info">
                      <h4 className="control-sidebar-subheading">
                        Cron Job 254 Executed
                      </h4>
                      <p>Execution time 5 seconds</p>
                    </div>
                  </a>
                </li>
              </ul>

              <h3 className="control-sidebar-heading">Tasks Progress</h3>
              <ul className="control-sidebar-menu">
                <li>
                  <a href="">
                    <h4 className="control-sidebar-subheading">
                      Custom Template Design
                      <span className="label label-danger pull-right">70%</span>
                    </h4>
                    <div className="progress progress-xxs">
                      <div
                        className="progress-bar progress-bar-danger"
                        style={{ width: '70%' }}
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <h4 className="control-sidebar-subheading">
                      Update Resume
                      <span className="label label-success pull-right">95%</span>
                    </h4>
                    <div className="progress progress-xxs">
                      <div
                        className="progress-bar progress-bar-success"
                        style={{ width: '95%' }}
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <h4 className="control-sidebar-subheading">
                      Laravel Integration
                      <span className="label label-warning pull-right">50%</span>
                    </h4>
                    <div className="progress progress-xxs">
                      <div
                        className="progress-bar progress-bar-warning"
                        style={{ width: '50%' }}
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <h4 className="control-sidebar-subheading">
                      Back End Framework
                      <span className="label label-primary pull-right">68%</span>
                    </h4>
                    <div className="progress progress-xxs">
                      <div
                        className="progress-bar progress-bar-primary"
                        style={{ width: '68%' }}
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </TabPane>
            <TabPane id="control-sidebar-stats-tab">
              Stats Tab Content
            </TabPane>
            <TabPane id="control-sidebar-settings-tab">
              <form method="post">
                <h3 className="control-sidebar-heading">General Settings</h3>
                <div className="form-group">
                  <label className="control-sidebar-subheading">
                    Report panel usage
                    <input type="checkbox" className="pull-right" defaultChecked />
                  </label>
                  <p>
                    Some information about this general settings option
                  </p>
                </div>

                <div className="form-group">
                  <label className="control-sidebar-subheading">
                    Allow mail redirect
                    <input type="checkbox" className="pull-right" defaultChecked />
                  </label>
                  <p>
                    Other sets of options are available
                  </p>
                </div>

                <div className="form-group">
                  <label className="control-sidebar-subheading">
                    Expose author name in posts
                    <input type="checkbox" className="pull-right" defaultChecked />
                  </label>
                  <p>
                    Allow the user to show his name in blog posts
                  </p>
                </div>

                <h3 className="control-sidebar-heading">Chat Settings</h3>

                <div className="form-group">
                  <label className="control-sidebar-subheading">
                    Show me as online
                    <input type="checkbox" className="pull-right" defaultChecked />
                  </label>
                </div>

                <div className="form-group">
                  <label className="control-sidebar-subheading">
                    Turn off notifications
                    <input type="checkbox" className="pull-right" />
                  </label>
                </div>

                <div className="form-group">
                  <label className="control-sidebar-subheading">
                    Delete chat history
                    <a href="" className="text-red pull-right">
                      <TrashIcon />
                    </a>
                  </label>
                </div>
              </form>
            </TabPane>
          </TabContent>
        </ControlbarWrapper>
      </LayoutWrapper>
    </LayoutStyles>
  ))
);
