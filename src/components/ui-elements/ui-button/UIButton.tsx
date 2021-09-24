import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, ButtonProps, SemanticCOLORS, SemanticSIZES } from 'semantic-ui-react';
import '@fortawesome/fontawesome-free';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/components/button.min.css';

export interface UIButtonProps {
  size?: SemanticSIZES;
  type?: 'default' | 'outlined';
  disabled?: boolean;
  color?: SemanticCOLORS | 'facebook' | 'google plus' | 'vk' | 'twitter' | 'linkedin' | 'instagram' | 'youtube';
  icon?: IconProp;
  iconPosition?: 'right' | 'left';
  iconStyle?: React.CSSProperties;
  fill?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: ButtonProps) => void;
  children?: React.ReactNode;
  className?: string;
}
export const UIButton: React.FC<UIButtonProps> = (props: React.PropsWithChildren<UIButtonProps>) => {
  const { size, color, fill, icon, iconStyle, onClick, disabled, className, children } = props;
  const iconPosition = props.iconPosition ?? 'left';
  const type = props.type ?? 'default';
  return (
    <Button basic={type === 'outlined'} disabled={disabled} fluid={fill} size={size} color={color} onClick={onClick} className={className}>
      {iconPosition === 'left' && icon && <FontAwesomeIcon icon={icon} style={{ marginRight: '1rem', ...iconStyle }} />}
      {children}
      {iconPosition === 'right' && icon && <FontAwesomeIcon icon={icon} style={{ marginLeft: '1rem', ...iconStyle }} />}
    </Button>
  );
};
