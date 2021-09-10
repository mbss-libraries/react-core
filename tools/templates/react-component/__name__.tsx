import React from 'react';
import "./__name__.css";
import 'bootstrap/dist/css/bootstrap.css';

export interface __name__Props {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const __name__: React.FC<__name__Props> = (props: React.PropsWithChildren<__name__Props>) => {
  const { children, className, style } = props;
  return <React.Fragment></React.Fragment>
};
