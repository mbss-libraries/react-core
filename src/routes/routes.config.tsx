/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import loadable, { LoadableComponent } from '@loadable/component';
import pMinDelay from 'p-min-delay';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { PageLoader } from 'src';

export const lazy = (cb: any) => loadable((props) => pMinDelay(cb(), 200), { fallback: <PageLoader /> });

export interface IRoute {
  name?: string;
  icon?: IconName;
  path: string;
  exact?: boolean;
  component: LoadableComponent<any> | null;
  layout?: any;
  children?: IRoute[];
  onSidenav?: boolean;
  showTitle?: boolean;
  requireAuthentication?: boolean;
}
