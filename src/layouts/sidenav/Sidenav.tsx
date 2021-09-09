import React from 'react';
import './Sidenav.css';
// import 'antd/lib/layout/style/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';

import { Layout, Menu, MenuTheme } from 'antd';
import { CollapseType } from 'antd/lib/layout/Sider';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export interface SidenavProps {
  collapsed?: boolean;
  onCollapse?(collapsed: boolean, type: CollapseType): void;
  theme?: MenuTheme;
  className?: string;
  logo?: React.ReactNode;
  children?: React.ReactNode;
}

export const Sidenav: React.FC<SidenavProps> = (props: React.PropsWithChildren<SidenavProps>) => {
  const { collapsed, onCollapse, theme, children, logo, className } = props;
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} trigger={null}>
      {logo ? logo : <div style={{ height: '1rem' }} />}
      <Menu theme={theme}>
        {children}
        {/* <Menu.Item key="2">Option 2</Menu.Item> */}
        {/* <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
       
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item> */}
      </Menu>
    </Sider>
  );
};
