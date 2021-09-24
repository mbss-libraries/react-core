import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UIButton } from '../../components/ui-elements/ui-button/UIButton';
import { ButtonProps } from 'semantic-ui-react';

export interface HeaderProps {
  onSidenavTriggerClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: ButtonProps) => void;
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
        {onSidenavTriggerClick && (
          <UIButton size="small" className="trigger" onClick={onSidenavTriggerClick}>
            <FontAwesomeIcon icon="bars" />
          </UIButton>
        )}
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </Layout.Header>
  );
};
