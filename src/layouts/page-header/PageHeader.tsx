import React from 'react';
import './PageHeader.css';
import 'bootstrap/dist/css/bootstrap.css';
import { PageHeader as BasePageHeader } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface PageHeaderProps {
  title?: string;
  subtitle?: string;
  onBack?(e?: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const PageHeader: React.FC<PageHeaderProps> = (props: React.PropsWithChildren<PageHeaderProps>) => {
  const { title, subtitle, onBack, children, className, style } = props;
  return (
    <BasePageHeader
      backIcon={onBack && <FontAwesomeIcon icon="chevron-left" />}
      onBack={onBack}
      title={
        <div className="align-items-center" style={{ marginLeft: '1rem' }}>
          {title && <div>{title}</div>}
          {subtitle && (
            <div className="ant-page-header-heading-sub-title" style={{ fontWeight: 1 }}>
              {subtitle}
            </div>
          )}
        </div>
      }
      // extra={}
    ></BasePageHeader>
  );
};
