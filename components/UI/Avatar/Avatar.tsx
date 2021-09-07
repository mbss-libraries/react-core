import { Badge, Tooltip } from 'antd';
import AntdAvatar from 'antd/lib/avatar';
import _ from 'lodash';
import React, { useCallback, useEffect, useRef } from 'react';
import { BColors, AntdPlacement } from '../../bootstrap';
import { useSelector } from 'react-redux';
import { AvatarBadge } from './avatar-badge/AvatarBadge';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { EDotPositions, getDotCssProperties } from './helpers/badge';
import { IStore } from '../../../store/reducer';
import classes from './Avatar.module.scss';

interface IProps {
  id: string;
  className?: string;
  tooltip?: boolean;
  tooltipPlacement?: AntdPlacement;
  showImage?: boolean;
  size?: number | 'small' | 'default' | 'large';
  fontSize?: number;
  badge?: {
    icon: IconProp;
    color?: string;
    badgeSize?: number;
    badgeFontSize?: number;
  };
  dot?: {
    color?: 'success' | 'processing' | 'error' | 'default' | 'warning' | undefined;
    position?: EDotPositions;
  };
  background?: keyof typeof BColors | 'zalando';
  border?: keyof typeof BColors | string;
  onClick?(): void;
}

/**
 *  @param id [string] (required) ID of an user.
 *  @param tooltip [boolean] (default: false) If true it display a tooltip with the full username.
 *  @param tooltipPlacement [AntdPlacement] (default: bottom) Placement of the tooltip.
 *  @param showImage [boolean] (default: true) If the user has a profile image it would be displayed.
 *  @param size [number|small|default|large] (default: default) Set the size of avatar component, nummer in px
 *  @param fontSize [number] (default: 14) Set the fontSize of avatar text, nummer in px
 *  @param badgeSize: [number] (default: @param size)
 *  @param badgeFontSize: [number] (default: inherit)
 *  @param background [BColors|zalando] (default: secondary) Set the background color for this avatar, can only be displayed if there is no profile image.
 *  @param border [BColors|string] (default: null) Set a border color for avatar.
 */
export const UIAvatar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { onClick } = props;
  const avatarEl = useRef<HTMLElement>(null);
  const user = useSelector((state: IStore) => _.find(state.models.User, { id: props.id }));

  const size = typeof props.size === 'string' ? ESize[props.size] : props.size ?? 32;
  const fontSize = props.fontSize ?? 14;

  const onAvatarClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  useEffect(() => {
    const el = avatarEl.current;
    el?.addEventListener('click', onAvatarClick);
    return () => {
      el?.removeEventListener('click', onAvatarClick);
    };
  }, [onAvatarClick]);

  let avatarJSX = (
    <AntdAvatar
      ref={avatarEl}
      src={props.showImage !== false ? user?.properties.global?.profile?.avatar : null}
      size={size}
      style={{ fontSize }}
      className={[
        props.className,
        classes[`bg-${props.background ?? 'secondary'}`],
        props.border ? classes[`border-${props.border}`] : null,
        props.onClick !== undefined ? 'clickable' : null,
      ].join(' ')}
    >
      {user?.properties.global?.profile?.name}
    </AntdAvatar>
  );

  if (props.tooltip && user) {
    avatarJSX = (
      <Tooltip title={user.properties.global?.profile?.name} placement={props.tooltipPlacement ?? 'bottom'}>
        {avatarJSX}
      </Tooltip>
    );
  }

  if (props.badge) {
    avatarJSX = (
      <AvatarBadge size={props.badge.badgeSize ?? size} fontSize={props.badge.badgeFontSize} icon={props.badge.icon} color={props.badge.color}>
        {avatarJSX}
      </AvatarBadge>
    );
  }

  if (props.dot) {
    avatarJSX = (
      <Badge dot status={props.dot.color} style={getDotCssProperties(props.dot.position ?? EDotPositions.topRight)}>
        {avatarJSX}
      </Badge>
    );
  }

  return avatarJSX;
};

export const MemorizedAvatar = React.memo(UIAvatar);

enum ESize {
  small = 24,
  default = 32,
  large = 40,
}
