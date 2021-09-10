import React from 'react';
import './LayoutBlank.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from 'antd/lib/layout';
import { Content } from 'antd/lib/layout/layout';

export interface LayoutBlankProps {
  children?: React.ReactNode;
}

export const LayoutBlank: React.FC<LayoutBlankProps> = (props: React.PropsWithChildren<LayoutBlankProps>) => {
  const { children } = props;
  return (
    <Layout style={{ minHeight: '100vh', width: '100vw' }}>
      <Content style={{ margin: '0 16px' }}>{children}</Content>
    </Layout>
  );
};
