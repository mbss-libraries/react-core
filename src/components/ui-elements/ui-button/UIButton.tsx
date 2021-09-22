import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, ButtonProps, SemanticCOLORS, SemanticSIZES } from 'semantic-ui-react';
import '@fortawesome/fontawesome-free';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/components/button.min.css';

export interface UIButtonProps {
  size?: SemanticSIZES;
  color?: SemanticCOLORS | 'facebook' | 'google plus' | 'vk' | 'twitter' | 'linkedin' | 'instagram' | 'youtube';
  leftIcon?: IconProp;
  leftIconStyle?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: ButtonProps) => void;
  children?: React.ReactNode;
  className?: string;
}
export const UIButton: React.FC<UIButtonProps> = (props: React.PropsWithChildren<UIButtonProps>) => {
  const { size, color, leftIcon, leftIconStyle, onClick, className, children } = props;
  return (
    <Button size={size} color={color} onClick={onClick} className={className}>
      {leftIcon && <FontAwesomeIcon icon={leftIcon} style={{ marginRight: '1rem', ...leftIconStyle }} />}
      {children}
    </Button>
  );
};
