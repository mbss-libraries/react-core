import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'antd/lib/card';
export interface UICardProps {
  hoverable?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export const UICard: React.FC<UICardProps> = (props: React.PropsWithChildren<UICardProps>) => {
  const { hoverable, className, style, onClick } = props;
  return (
    <Card hoverable={hoverable} className={[className].join(' ')} onClick={onClick} style={{ borderRadius: '0.25rem', ...style }}>
      {props.children}
    </Card>
  );
};
