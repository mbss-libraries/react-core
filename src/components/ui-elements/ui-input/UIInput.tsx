import React from 'react';
import './UIInput.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Input, InputProps } from 'antd';

export interface UIInputProps extends InputProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const UIInput: React.FC<UIInputProps> = (props: React.PropsWithChildren<UIInputProps>) => {
  const { children, className, style, ...other } = props;
  return (
    <React.Fragment>
      <Input {...other} className={['py-2 rounded-2', className].join(' ')} />
    </React.Fragment>
  );
};
