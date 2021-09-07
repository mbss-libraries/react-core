import { FormItemContainer, IFormItemContainerProps } from '@components';
import { InputNumber, InputNumberProps } from 'antd';
import React from 'react';

interface IProps extends IFormItemContainerProps, InputNumberProps {
  title: string;
  value?: string | number;
  onChange?(el: string | number): void;
}
export const FormInputNumber: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { value, onChange } = props;
  return (
    <FormItemContainer {...props}>
      <InputNumber {...props} className="rounded" value={value} onChange={onChange} />
    </FormItemContainer>
  );
};
