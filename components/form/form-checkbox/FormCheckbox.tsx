import { FormItemContainer, IFormItemContainerProps } from '@components';
import Checkbox, { CheckboxChangeEvent, CheckboxProps } from 'antd/lib/checkbox/Checkbox';
import React from 'react';

interface IProps extends IFormItemContainerProps, CheckboxProps {
  text: string;
  value?: boolean;
  onChange?(e: CheckboxChangeEvent): void;
}
export const FormCheckbox: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { value, onChange, text, ...other } = props;
  return (
    <FormItemContainer {...other}>
      <div className="flex-column flex-grow-1 justify-content-center align-items-center">
        <Checkbox {...other} className="rounded" checked={value} onChange={onChange}>
          {text}
        </Checkbox>
      </div>
    </FormItemContainer>
  );
};
