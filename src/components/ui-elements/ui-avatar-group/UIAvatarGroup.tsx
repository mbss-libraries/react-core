import React from 'react';
import './UIAvatarGroup.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Avatar } from 'antd';

export interface UIAvatarGroupProps {
  size?: number;
  maxCount?: number;
  maxPopoverPlacement?: 'top' | 'bottom';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxStyle?: React.CSSProperties;
}

export const UIAvatarGroup: React.FC<UIAvatarGroupProps> = (props: React.PropsWithChildren<UIAvatarGroupProps>) => {
  const { maxCount, maxPopoverPlacement, maxStyle, children, className, style, size } = props;
  return (
    <Avatar.Group maxCount={maxCount} maxPopoverPlacement={maxPopoverPlacement} size={size} className={className} style={style} maxStyle={maxStyle}>
      {children}
    </Avatar.Group>
  );
};
