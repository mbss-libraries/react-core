import React from 'react';
import './UIFormRow.css';
import 'bootstrap/dist/css/bootstrap.css';

export interface UIFormRowProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const UIFormRow: React.FC<UIFormRowProps> = (props: React.PropsWithChildren<UIFormRowProps>) => {
  const { className, children, style } = props;
  return (
    <div className={['mt-2 mx-2 row', className].join(' ')} style={style}>
      {children}
    </div>
  );
};
