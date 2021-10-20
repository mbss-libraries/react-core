import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, ButtonProps, SemanticCOLORS, SemanticSIZES } from 'semantic-ui-react';
import '@fortawesome/fontawesome-free';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/components/button.min.css';
import { TooltipPlacement } from 'antd/lib/tooltip';
import { UITooltip } from '../ui-tooltip/UITooltip';

export interface UIButtonProps {
  size?: SemanticSIZES;
  type?: 'default' | 'outlined';
  disabled?: boolean;
  color?: SemanticCOLORS | 'facebook' | 'google plus' | 'vk' | 'twitter' | 'linkedin' | 'instagram' | 'youtube';
  icon?: IconProp;
  iconPosition?: 'right' | 'left';
  iconStyle?: React.CSSProperties;
  tooltip?: string;
  tooltipPlacement?: TooltipPlacement;
  fill?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: ButtonProps) => void;
  children?: React.ReactNode;
  className?: string;
}
export const UIButton: React.FC<UIButtonProps> = (props: React.PropsWithChildren<UIButtonProps>) => {
  const { size, color, fill, icon, iconStyle, tooltip, tooltipPlacement, onClick, disabled, className, children } = props;
  const iconPosition = props.iconPosition ?? 'left';
  const type = props.type ?? 'default';

  const buttonJSX = (
    <Button basic={type === 'outlined'} disabled={disabled} fluid={fill} size={size} color={color} onClick={onClick} className={className}>
      {iconPosition === 'left' && icon && <FontAwesomeIcon icon={icon} style={{ marginRight: children ? '1rem' : undefined, ...iconStyle }} />}
      {children}
      {iconPosition === 'right' && icon && <FontAwesomeIcon icon={icon} style={{ marginLeft: children ? '1rem' : undefined, ...iconStyle }} />}
    </Button>
  );

  if (tooltip) {
    return (
      <UITooltip title={tooltip} placement={tooltipPlacement}>
        {buttonJSX}
      </UITooltip>
    );
  }

  return buttonJSX;
};
