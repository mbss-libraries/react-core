import React from 'react';
import { Card, CardProps } from 'semantic-ui-react';

export interface UICardProps {
  onClick?(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: CardProps): void;
  className?: string;
  children?: React.ReactNode;
}
export const UICard: React.FC<UICardProps> = (props: React.PropsWithChildren<UICardProps>) => {
  const { className, onClick } = props;
  return (
    <Card className={['p-3 shadow', className].join(' ')} onClick={onClick}>
      {props.children}
    </Card>
  );
};
