import React from 'react';
import './SidenavItem.css';
import { Menu } from 'antd';
import 'antd/lib/menu/style/index.css';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/js/all';
import { MenuClickEventHandler } from 'rc-menu/lib/interface.js';

const { Item, SubMenu } = Menu;

export interface SidenavItemProps {
  key: string;
  title?: string;
  hasSubItems?: boolean;
  icon?: IconName;
  onClick?: MenuClickEventHandler;
  className?: string;
  children?: React.ReactNode;
}

export const SidenavItem: React.FC<SidenavItemProps> = (props: React.PropsWithChildren<SidenavItemProps>) => {
  const { key, title, hasSubItems, icon, onClick, children, className, ...other } = props;
  if (hasSubItems) {
    return (
      <SubMenu key={key} className={className} icon={icon && <FontAwesomeIcon icon={icon} />} title={title} {...other}>
        {children}
      </SubMenu>
    );
  }
  return (
    <Item key={key} className={className} onClick={onClick} icon={icon && <FontAwesomeIcon icon={icon} />} {...other}>
      {title ?? children}
    </Item>
  );
};
