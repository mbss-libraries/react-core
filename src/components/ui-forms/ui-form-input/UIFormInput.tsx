import React from 'react';
import './UIFormInput.css';
import 'bootstrap/dist/css/bootstrap.css';
import { UIFormBaseContainer, UIFormBaseContainerProps } from '../ui-form-base-container/UIFormBaseContainer';
import { UIInput } from '../../ui-elements/ui-input/UIInput';
import { LiteralUnion } from 'antd/lib/_util/type';

export interface UIFormInputProps extends UIFormBaseContainerProps {
  title: string;
  value?: string | number;
  inputType?: LiteralUnion<
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week',
    string
  >;

  onChange?(el: React.ChangeEvent<HTMLInputElement>): void;
}

export const UIFormInput: React.FC<UIFormInputProps> = (props: React.PropsWithChildren<UIFormInputProps>) => {
  const { value, onChange, inputType, ...other } = props;
  return (
    <UIFormBaseContainer {...other}>
      <UIInput {...other} value={value} onChange={onChange} type={inputType} />
    </UIFormBaseContainer>
  );
};
