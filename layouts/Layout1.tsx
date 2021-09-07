import React, { FunctionComponent, PropsWithChildren, useEffect } from 'react';
import { Navbar } from './navbar/Navbar';
import LayoutSidenav from './Sidenav/LayoutSidenav';
import { Footer } from './Footer/LayoutFooter';
import layoutHelpers from './helpers';

interface IProps extends PropsWithChildren<unknown> {}
export const Layout1: FunctionComponent = (props: IProps) => {
  useEffect(() => {
    layoutHelpers.init();
    layoutHelpers.update();
    layoutHelpers.setAutoUpdate(true);

    return () => {
      layoutHelpers.destroy();
    };
  }, []);

  const closeSidenav = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    layoutHelpers.setCollapsed(true);
  };

  return (
    <div className="layout-wrapper layout-1">
      <div className="layout-inner">
        <Navbar {...props} />

        <div className="layout-container">
          <LayoutSidenav {...props} />

          <div className="layout-content">
            <div className="container-fluid flex-grow-1 container-p-y">{props.children}</div>

            <Footer {...props} />
          </div>
        </div>
      </div>
      <div className="layout-overlay" onClick={closeSidenav}></div>
    </div>
  );
};
