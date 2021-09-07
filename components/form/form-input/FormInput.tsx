import { FormItemContainer, IFormItemContainerProps, IUiInputProps, UIInput } from '@components';
import React from 'react';

interface IProps extends IFormItemContainerProps, IUiInputProps {
  title: string;
  value?: string | number;
  onChange?(el: React.ChangeEvent<HTMLInputElement>): void;
}
export const FormInput: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { value, onChange, ...other } = props;
  return (
    <FormItemContainer {...other}>
      <UIInput {...other} className="rounded" value={value} onChange={onChange} />
    </FormItemContainer>
  );
};
