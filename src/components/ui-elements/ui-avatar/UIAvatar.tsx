import React from 'react';
import './UIAvatar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Avatar, Tooltip } from 'antd';
import { TooltipPlacement } from 'antd/lib/tooltip';

export interface UIAvatarProps {
  src?: string;
  size?: number | 'small' | 'default' | 'large';
  tooltipTitle?: string;
  tooltipPlacement?: TooltipPlacement;
  border?: { width?: number; color?: string };
  showImage?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const UIAvatar: React.FC<UIAvatarProps> = (props: React.PropsWithChildren<UIAvatarProps>) => {
  const { src, tooltipTitle, tooltipPlacement, children, className } = props;
  const showImage = props.showImage === undefined ? true : props.showImage;
  const size = typeof props.size === 'string' ? ESize[props.size] : props.size ?? 32;
  const border: { width: number; color: string } = { width: props.border?.width ?? 0, color: props.border?.color ?? 'black' };

  const borderStyle: React.CSSProperties = { border: `${border.width}px solid ${border.color}` };
  const style: React.CSSProperties = { ...borderStyle, ...props.style };

  const avatarJSX = (
    <Avatar className={[className].join(' ')} size={size} src={showImage ? src : null} style={style}>
      {children}
    </Avatar>
  );

  if (tooltipTitle) {
    return (
      <Tooltip title={tooltipTitle} placement={tooltipPlacement}>
        {avatarJSX}
      </Tooltip>
    );
  }

  return avatarJSX;
};

enum ESize {
  small = 24,
  default = 32,
  large = 40,
}
