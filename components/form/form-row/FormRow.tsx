import React from 'react';

interface IProps {
  className?: string;
}
export const FormRow: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { className } = props;
  return <div className={['mt-2 mx-2 row', className].join(' ')}> {props.children}</div>;
};
