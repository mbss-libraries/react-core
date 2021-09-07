import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Input, InputProps } from 'antd';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IUiInputProps extends InputProps {
  icon?: IconProp;
}
export const UIInput: React.FC<IUiInputProps> = (props: React.PropsWithChildren<IUiInputProps>) => {
  const { icon } = props;
  return <Input prefix={icon && <FontAwesomeIcon icon={icon} className="mr-2 text-muted" />} {...props} />;
};
