import React from 'react';
import './UIFormCheckbox.css';
import 'bootstrap/dist/css/bootstrap.css';
import { UIFormBaseContainer, UIFormBaseContainerProps } from '../ui-form-base-container/UIFormBaseContainer';
import Checkbox, { CheckboxChangeEvent } from 'antd/lib/checkbox';

export interface UIFormCheckboxProps extends UIFormBaseContainerProps {
  text: string;
  value?: boolean;
  onChange?(e: CheckboxChangeEvent): void;
}

export const UIFormCheckbox: React.FC<UIFormCheckboxProps> = (props: React.PropsWithChildren<UIFormCheckboxProps>) => {
  const { value, onChange, text, ...other } = props;
  return (
    <UIFormBaseContainer {...other}>
      <div className="flex-column flex-grow-1 justify-content-center align-items-center">
        <Checkbox {...other} className="rounded" checked={value} onChange={onChange}>
          {text}
        </Checkbox>
      </div>
    </UIFormBaseContainer>
  );
};
