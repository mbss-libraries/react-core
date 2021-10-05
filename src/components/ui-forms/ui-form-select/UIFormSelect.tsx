import React from 'react';
import './UIFormSelect.css';
import 'bootstrap/dist/css/bootstrap.css';
import { UIFormBaseContainer, UIFormBaseContainerProps } from '../ui-form-base-container/UIFormBaseContainer';
import { Select } from 'antd';

export interface UIFormSelectProps extends UIFormBaseContainerProps {
  mode?: 'multiple' | 'tags';
  allowClear?: boolean;
  placeholder?: string;
  value?: string[];
  onChange?(value: string[]): void;
}

export const UIFormSelect: React.FC<UIFormSelectProps> = (props: React.PropsWithChildren<UIFormSelectProps>) => {
  const { placeholder, allowClear, mode, value, onChange, children, ...other } = props;
  return (
    <UIFormBaseContainer {...other}>
      <Select
        mode={mode}
        allowClear={allowClear}
        className="py-2 rounded-2"
        style={{ width: '100%' }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      >
        {children}
      </Select>
    </UIFormBaseContainer>
  );
};
