import React from 'react';
import './UIFormBaseContainer.css';
import 'bootstrap/dist/css/bootstrap.css';

export interface UIFormBaseContainerProps {
  title: string;
  subtitle?: string;
  col?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export const UIFormBaseContainer: React.FC<UIFormBaseContainerProps> = (props: React.PropsWithChildren<UIFormBaseContainerProps>) => {
  const { title, subtitle, col, className, children, style } = props;
  return (
    <div className={[col ? `col-${col}` : 'col', className].join(' ')} style={style}>
      <strong>{title}</strong>
      {children}
      {subtitle && <small className="text-muted">{subtitle}</small>}
    </div>
  );
};
