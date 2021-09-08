import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.css';

export interface UISpinnerProps {
  size?: number;
  className?: string;
  children?: React.ReactNode;
}

export const UISpinner: React.FC<UISpinnerProps> = (props: React.PropsWithChildren<UISpinnerProps>) => {
  const { size, children, className } = props;

  return <Spin className={className} indicator={<LoadingOutlined style={{ fontSize: size ?? 24 }} spin />} />;
};
