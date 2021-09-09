import React from 'react';
import './Layout1.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Layout } from 'antd';

const { Content } = Layout;

export interface Layout1Props {
  sidenav?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export const Layout1: React.FC<Layout1Props> = (props: React.PropsWithChildren<Layout1Props>) => {
  const { sidenav, header, footer, children, className } = props;
  return (
    <Layout style={{ minHeight: '100vh', width: '100vw' }}>
      {sidenav}
      <Layout className="site-layout">
        {header}
        <Content style={{ margin: '0 16px' }}>{children}</Content>
        {footer}
      </Layout>
    </Layout>
  );
};
