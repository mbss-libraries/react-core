import React from 'react';
import { Card, CardProps } from 'semantic-ui-react';

interface IProps {
  onClick?(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: CardProps): void;
  className?: string;
}
export const UICard: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { className, onClick } = props;
  return (
    <Card className={['p-3 shadow', className].join(' ')} onClick={onClick}>
      {props.children}
    </Card>
  );
};
