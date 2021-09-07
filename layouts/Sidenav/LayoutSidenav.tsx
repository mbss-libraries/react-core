import React, { Fragment, FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import _ from 'lodash';
import SidenavMenu from 'src/vendor/libs/sidenav/SidenavMenu';
import { routes } from 'src/routes/Router';
import { IRoute } from 'src/routes/routes.config';
import Sidenav from 'src/vendor/libs/sidenav';
import SidenavRouterLink from 'src/vendor/libs/sidenav/SidenavRouterLink';

interface IProps {
  orientation?: 'vertical' | 'horizontal';
}

const LayoutSidenav: FunctionComponent<IProps> = (props: IProps) => {
  const location = useLocation();
  const sidenavBg = 'sidenav-theme';

  const layoutSidenavClasses = () => {
    let bg = sidenavBg ?? '';
    if (props.orientation === 'horizontal' && (bg.indexOf(' sidenav-dark') !== -1 || bg.indexOf(' sidenav-light') !== -1)) {
      bg = bg.replace(' sidenav-dark', '').replace(' sidenav-light', '').replace('-darker', '').replace('-dark', '');
    }

    return `bg-${bg} ` + (props.orientation !== 'horizontal' ? 'layout-sidenav' : 'layout-sidenav-horizontal container-p-x flex-grow-0');
  };

  const buildSingleRoute = (route: IRoute): JSX.Element => {
    if (route.children) {
      return (
        <SidenavMenu
          key={route.path}
          icon={route.icon}
          linkText={route.name}
          active={location.pathname.includes(route.path)}
          open={location.pathname.includes(route.path)}
        >
          {route.children.map((child) => buildSingleRoute(child))}
        </SidenavMenu>
      );
    }
    return route.onSidenav !== false ? (
      <SidenavRouterLink key={route.path} to={route.path} exact={route.exact} icon={route.icon}>
        {route.name}
      </SidenavRouterLink>
    ) : (
      <Fragment key={route.path}></Fragment>
    );
  };
  const buildAppRoutes = () => {
    const elements: JSX.Element[] = [];
    // if (app && routes[app.short_name] !== undefined && routes['global'] !== undefined) {
    // const keys = ['global', 'quiz'];
    // keys.forEach((key) => {
    _.forEach(routes, (app) => {
      _.forEach(app, (route) => elements.push(buildSingleRoute(route)));
    });
    // });
    // }
    return elements;
  };

  const routesJSX = buildAppRoutes();
  return (
    <Sidenav orientation={props.orientation ?? 'vertical'} className={layoutSidenavClasses()}>
      <hr />
      {routesJSX.length === 0 && (
        <div className="h-100 w-100 vertical-text">
          <h1>Choose an app to work with</h1>
        </div>
      )}
      <div className={`sidenav-inner ${props.orientation !== 'horizontal' ? 'py-1' : ''}`}>{routesJSX.length > 0 && routesJSX}</div>
    </Sidenav>
  );
};

export default LayoutSidenav;
