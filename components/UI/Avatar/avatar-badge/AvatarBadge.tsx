import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from 'antd';
import React from 'react';
import { EBadgePositions, getBadgeCssProperties } from '../helpers/badge';

interface IProps {
  icon: IconProp;
  size: number;
  color?: string;
  fontSize?: number;
  position?: EBadgePositions;
}

/**
 *
 * @param icon [IconProp] (required)
 * @param size [number] (required)
 * @param color [string] (default: undefined) If no color is passed, the background is transparent. Colors can be passed in HEX or from bootstrap (warning, danger, ...).
 * @param fontSize [number] (default @param size - 10)
 */
export const AvatarBadge: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const size = props.size / 1.75;
  const isBootstrapColor = !props.color?.includes('#');

  const icon: JSX.Element = (
    <div
      className={['rounded-circle d-flex justify-content-center', isBootstrapColor && `bg-${props.color}`].join(' ')}
      style={{ width: size, height: size, alignItems: 'center', backgroundColor: !isBootstrapColor ? props.color : undefined }}
    >
      <FontAwesomeIcon className="text-white" icon={props.icon} style={{ fontSize: props.fontSize ? `${props.fontSize}px` : `${size - 10}px` }} />
    </div>
  );

  return (
    <Badge count={icon} style={getBadgeCssProperties(props.position ?? EBadgePositions.bottomLeft)}>
      {props.children}
    </Badge>
  );
};
