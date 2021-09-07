import { FormItemContainer, IFormItemContainerProps } from '@components';
import { Select } from 'antd';
import React from 'react';

interface IProps extends IFormItemContainerProps {
  placeholder?: string;
  value?: string[];
  onChange?(value: string[]): void;
}
export const FormSelectMulti: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { value, onChange, children, ...other } = props;
  return (
    <FormItemContainer {...other}>
      <Select mode="multiple" allowClear style={{ width: '100%' }} placeholder="Please select" value={value} onChange={onChange}>
        {children}
      </Select>
    </FormItemContainer>
  );
};
