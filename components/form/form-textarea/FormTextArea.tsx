import { Input } from 'antd';
import React from 'react';
import { FormItemContainer, IFormItemContainerProps } from '../form-item-container/FormItemContainer';

interface IProps extends IFormItemContainerProps {
  rows?: number;
  value?: string | number;
  onChange?(el: React.ChangeEvent<HTMLTextAreaElement>): void;
}
export const FormTextArea: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { rows, value, onChange } = props;
  return (
    <FormItemContainer {...props}>
      <Input.TextArea className="rounded" rows={rows} value={value} onChange={onChange} />
    </FormItemContainer>
  );
};
