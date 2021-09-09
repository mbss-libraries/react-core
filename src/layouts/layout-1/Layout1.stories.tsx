import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Layout1, Layout1Props } from './Layout1';
import { Sidenav } from '../sidenav/Sidenav';
import { SidenavItem } from '../sidenav-item/SidenavItem';
import { Footer, Header } from 'antd/lib/layout/layout';
import Breadcrumb from 'antd/lib/breadcrumb';

export default {
  title: 'Layout/Layout1',
  component: Layout1,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template1: Story<Layout1Props> = (args) => <Layout1 {...args}></Layout1>;

const Template2: Story<Layout1Props> = (args) => (
  <Layout1
    {...args}
    sidenav={
      <Sidenav theme="dark" logo={<div className="logo" />}>
        <SidenavItem key="1" icon="home">
          Seite 1
        </SidenavItem>
        <SidenavItem key="2" icon="bookmark">
          Seite 2
        </SidenavItem>
        <SidenavItem key="3" icon="user">
          Seite 3
        </SidenavItem>
      </Sidenav>
    }
    header={<Header className="site-layout-background" style={{ padding: 0 }} />}
    footer={<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>}
  >
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
    <div className="site-layout-background" style={{ padding: 24, minHeight: 360, height: '100%' }}>
      Bill is a cat.
    </div>
  </Layout1>
);
// Reuse that template for creating different stories
export const Basic = Template1.bind({});
Basic.args = {};

export const Full = Template2.bind({});
Full.args = {};
