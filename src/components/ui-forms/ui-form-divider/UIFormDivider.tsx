import React from 'react';
import './UIFormDivider.css';
import 'bootstrap/dist/css/bootstrap.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface UIFormDividerProps {
  icon: IconProp;
  title: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const UIFormDivider: React.FC<UIFormDividerProps> = (props: React.PropsWithChildren<UIFormDividerProps>) => {
  const { icon, title, className, style } = props;
  return (
    <div className={[className, 'mt-3 bg-light p-2 rounded d-flex justify-content-between'].join(' ')} style={{ ...style, alignItems: 'center' }}>
      <div className="ml-3">
        <FontAwesomeIcon icon={icon} className="text-center mr-3" style={{ fontSize: '16px' }} />
        <strong>{title}</strong>
      </div>
      <div className="mr-3">{props.children}</div>
    </div>
  );
};
