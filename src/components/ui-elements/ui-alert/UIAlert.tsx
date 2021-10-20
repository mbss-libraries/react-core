import React from 'react';
import './UIAlert.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Alert, AlertProps } from 'antd';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface UIAlertProps {
  message: React.ReactNode;
  type?: 'success' | 'info' | 'warning' | 'error';
  showIcon?: boolean;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  closeText?: React.ReactNode;
  closable?: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  // className?: string;
  // style?: React.CSSProperties;
}

export const UIAlert: React.FC<UIAlertProps> = (props: React.PropsWithChildren<UIAlertProps>) => {
  const { children, ...other } = props;
  return <Alert {...other} description={children} />;
};
