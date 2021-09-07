import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, ButtonProps } from 'semantic-ui-react';

interface IProps extends ButtonProps {
  leftIcon?: IconProp;
}
export const UIButton: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { leftIcon, ...vendorProps } = props;
  return (
    <Button color="red" {...vendorProps}>
      {leftIcon && <FontAwesomeIcon icon={leftIcon} className="mr-2" />}
      {props.children}
    </Button>
  );
};
