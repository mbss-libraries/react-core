import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Sidenav, SidenavProps } from './Sidenav';
import { SidenavItem } from '../sidenav-item/SidenavItem';

export default {
  title: 'Layout/Sidenav',
  component: Sidenav,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SidenavProps> = (args) => <Sidenav {...args} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = {
  children: [
    <SidenavItem key="1" icon="home">
      Seite 1
    </SidenavItem>,
    <SidenavItem key="2" hasSubItems icon="bookmark" title="Seite 2">
      <SidenavItem key="3" icon="user">
        Seite 2.1
      </SidenavItem>
    </SidenavItem>,
    <SidenavItem key="4" icon="home" title="Seite 3" />,
  ],
};

export const Logo = Template.bind({});
Logo.args = { logo: <div className="logo" />, children: Basic.args.children };
