import React from 'react';
import "./__name__.css";
import 'bootstrap/dist/css/bootstrap.css';

export interface __name__Props {
  className?: string;
  children?: React.ReactNode;
}

export const __name__: React.FC<__name__Props> = (props: React.PropsWithChildren<__name__Props>) => {
  const { children, className } = props;
  return <React.Fragment></React.Fragment>
};
