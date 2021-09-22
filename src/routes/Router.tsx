import React, { Fragment } from 'react';
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom';
import _ from 'lodash';
import { IRoute, NotFound } from '@routes';
import { LayoutBlank } from 'src';

interface IProps {
  isAuhenticated: boolean;
  routes: IRoute[];
  defaultRoute?: string;
  redirectIfAuthenticationIsRequired?: string;
  scrollToTop?: boolean;
  defaultLayout?: React.ComponentType;
  notFoundComponent?: React.ComponentType;
}
export const Router: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { isAuhenticated, routes } = props;
  const defaultRoute = props.defaultRoute ?? '/';
  const redirectIfAuthenticationIsRequired = props.redirectIfAuthenticationIsRequired ?? '/login';
  const scrollToTop = props.scrollToTop ?? true;
  const notFoundComponent = props.notFoundComponent ?? NotFound;
  const defaultLayout = props.defaultLayout ?? LayoutBlank;
  const currentRoute = window.location.pathname;

  const pathsWithoutAuth = (() => {
    return _.filter(routes, (route) => route.requireAuthentication === false).map((route) => route.path);
  })();

  const scrollTop = (to: number, duration: number, element = document.scrollingElement || document.documentElement) => {
    if (element.scrollTop === to) return;
    const start = element.scrollTop;
    const change = to - start;
    const startDate = +new Date();

    if (!duration) {
      element.scrollTop = to;
      return;
    }

    // t = current time; b = start value; c = change in value; d = duration
    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animateScroll = () => {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = easeInOutQuad(currentTime, start, change, duration);

      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        element.scrollTop = to;
      }
    };

    animateScroll();
  };

  const buildRoute = (route: IRoute) => {
    if (!route.layout) route.layout = defaultLayout;
    if (!route.exact) route.exact = true;

    return (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        render={(props) => {
          if (route.showTitle && route.name) document.title = '%s | '.replace('%s', route.name);
          if (scrollToTop) scrollTop(0, 0);
          return <route.layout {...props}>{route.component && <route.component {...props} />}</route.layout>;
        }}
      />
    );
  };

  return (
    <Fragment>
      <AppRouter basename={defaultRoute}>
        {!isAuhenticated && !pathsWithoutAuth.includes(currentRoute) && (
          <Redirect to={{ pathname: redirectIfAuthenticationIsRequired, state: { from: currentRoute } }} exact />
        )}
        <Switch>
          {_.concat([], ..._.map(routes)).map((route) => {
            if (route.component !== null) {
              return [buildRoute(route)];
            }
            if (route.children) return _.map(route.children, (child) => buildRoute(child));
          })}
          {defaultRoute !== '/' && <Redirect from="/" to={defaultRoute} exact={true} />}

          <Route path="*" component={notFoundComponent} />
        </Switch>
      </AppRouter>
    </Fragment>
  );
};

export interface IRedirectState {
  from?: string;
}
