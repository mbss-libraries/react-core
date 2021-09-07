import React from 'react';
import { NavbarLanding } from './navbar/NavbarLanding';

interface IProps {}
export const LayoutLanding: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <div className="layout-wrapper layout-1">
      <div className="layout-inner">
        <NavbarLanding {...props} />

        <div className="layout-container">
          <div className="layout-content">
            <div className="container-fluid flex-grow-1 container-p-y">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
