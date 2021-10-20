import React from 'react';
import './UITooltip.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Tooltip } from 'antd';
import { TooltipPropsWithTitle } from 'antd/lib/tooltip';

export interface UITooltipProps extends TooltipPropsWithTitle {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const UITooltip: React.FC<UITooltipProps> = (props: React.PropsWithChildren<UITooltipProps>) => {
  const { children, className, style, ...other } = props;
  return (
    <Tooltip className={className} style={style} {...other}>
      {children}
    </Tooltip>
  );
};
