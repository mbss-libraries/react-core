import React from 'react';

export interface IFormItemContainerProps {
  title: string;
  subtitle?: string;
  col?: string | number;
  className?: string;
}
export const FormItemContainer: React.FC<IFormItemContainerProps> = (props: React.PropsWithChildren<IFormItemContainerProps>) => {
  const { title, subtitle, col, className } = props;
  return (
    <div className={[col ? `col-${col}` : 'col', className].join(' ')}>
      <strong>{title}</strong>
      {props.children}
      {subtitle && <small className="text-muted">{subtitle}</small>}
    </div>
  );
};
