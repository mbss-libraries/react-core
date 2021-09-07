import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface IProps {
  icon: IconProp;
  title: string;
  className?: string;
}
export const FormDivider: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { icon, title, className } = props;
  return (
    <div className={[className, 'mt-3 bg-light p-2 rounded d-flex justify-content-between'].join(' ')} style={{ alignItems: 'center' }}>
      <div className="ml-3">
        <FontAwesomeIcon icon={icon} className="text-center mr-3" style={{ fontSize: '16px' }} />
        <strong>{title}</strong>
      </div>
      <div className="mr-3">{props.children}</div>
    </div>
  );
};
