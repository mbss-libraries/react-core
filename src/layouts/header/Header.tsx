import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface HeaderProps {
  onSidenavTriggerClick?: React.MouseEventHandler<SVGSVGElement>;
  className?: string;
  children?: React.ReactNode;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

export const Header: React.FC<HeaderProps> = (props: React.PropsWithChildren<HeaderProps>) => {
  const { children, className, onSidenavTriggerClick, backgroundColor, style } = props;
  return (
    <Layout.Header className={className} style={{ backgroundColor: backgroundColor ?? '#FFF', ...style }}>
      <div className="d-flex align-items-center" style={{ height: '100%', width: '100%' }}>
        {onSidenavTriggerClick && <FontAwesomeIcon className="trigger" icon="bars" onClick={onSidenavTriggerClick} />}
        <div className="bg-black">{children}</div>
      </div>
    </Layout.Header>
  );
};
