import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Layout1, Layout1Props } from './Layout1';
import { Sidenav } from '../sidenav/Sidenav';
import { SidenavItem } from '../sidenav-item/SidenavItem';
import { Footer } from 'antd/lib/layout/layout';
import Breadcrumb from 'antd/lib/breadcrumb';
import { Header } from '../header/Header';
import { PageHeader } from '../page-header/PageHeader';

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
    header={<Header onSidenavTriggerClick={() => null} />}
    footer={<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>}
  >
    <PageHeader title="Example" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
  </Layout1>
);
// Reuse that template for creating different stories
export const Basic = Template1.bind({});
Basic.args = {};

export const Full = Template2.bind({});
Full.args = {};
