import React from 'react';
import "./UIFormButton.css";
import 'bootstrap/dist/css/bootstrap.css';
import { UIFormBaseContainer, UIFormBaseContainerProps } from '../ui-form-base-container/UIFormBaseContainer';
import { UIButton, UIButtonProps } from '../../ui-elements/ui-button/UIButton';

export interface UIFormButtonProps extends UIFormBaseContainerProps, UIButtonProps {}

export const UIFormButton: React.FC<UIFormButtonProps> = (props: React.PropsWithChildren<UIFormButtonProps>) => {
  const { children, ...other } = props;
  return <UIFormBaseContainer {...other}>
      <div><UIButton children={children} {...other}  /></div>
    </UIFormBaseContainer>
};
