import { IconProp, IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, SemanticSIZES } from 'semantic-ui-react';
import 'semantic-ui-css/components/button.min.css';

export interface UIButtonProps {
  size?: SemanticSIZES;
  leftIcon?: IconName;
  children?: React.ReactNode;
}
export const UIButton: React.FC<UIButtonProps> = (props: React.PropsWithChildren<UIButtonProps>) => {
  const { size, leftIcon } = props;
  return (
    <Button size={size}>
      {leftIcon && <FontAwesomeIcon icon={leftIcon} className="mr-2" />}
      {props.children}
    </Button>
  );
};
