import React from 'react';
import './Sidenav.css';
// import 'antd/lib/layout/style/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';

import { Layout, Menu, MenuTheme } from 'antd';
import { CollapseType } from 'antd/lib/layout/Sider';
import MenuItem from 'antd/lib/menu/MenuItem';

const { Sider } = Layout;
export interface SidenavProps {
  collapsed?: boolean;
  onCollapse?(collapsed: boolean, type: CollapseType): void;
  avatarContent?: React.ReactNode;
  avatarContentStyle?: React.CSSProperties;
  theme?: MenuTheme;
  selectedRoutes?: string[];
  className?: string;
  logo?: React.ReactNode;
  children?: React.ReactNode;
}

export const Sidenav: React.FC<SidenavProps> = (props: React.PropsWithChildren<SidenavProps>) => {
  const { collapsed, onCollapse, avatarContent, avatarContentStyle, theme, selectedRoutes, children, logo, className } = props;

  return (
    <Sider className={className} trigger={null} collapsible collapsed={collapsed} onCollapse={onCollapse}>
      {logo ? logo : <div style={{ height: '1rem' }} />}
      {avatarContent && (
        <div className="avatar-container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', ...avatarContentStyle }}>
          {avatarContent}
        </div>
      )}
      <Menu theme={theme} mode="inline" selectedKeys={selectedRoutes}>
        {children}
      </Menu>
    </Sider>
  );
};
