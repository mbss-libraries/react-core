import React from 'react';
import './SidenavItem.css';
import { Menu } from 'antd';
import 'antd/lib/menu/style/index.css';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/js/all';
import { MenuClickEventHandler } from 'rc-menu/lib/interface.js';

const { SubMenu, Item } = Menu;

export interface SidenavItemProps {
  key: string;
  icon?: IconName;
  onClick?: MenuClickEventHandler;
  className?: string;
  children?: React.ReactNode;
}

export const SidenavItem: React.FC<SidenavItemProps> = (props: React.PropsWithChildren<SidenavItemProps>) => {
  const { key, icon, onClick, children, className } = props;
  return (
    <Item key={key} className={className} onClick={onClick} icon={icon && <FontAwesomeIcon icon={icon} />}>
      {children}
    </Item>
  );
};

{
  /* <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
<Menu.Item key="6">Team 1</Menu.Item>
<Menu.Item key="8">Team 2</Menu.Item>
</SubMenu> */
}
