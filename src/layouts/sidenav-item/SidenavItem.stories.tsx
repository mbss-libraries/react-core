import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { SidenavItem, SidenavItemProps } from './SidenavItem';
import { Sidenav } from '../sidenav/Sidenav';

export default {
  title: 'Layout/SidenavItem',
  component: SidenavItem,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SidenavItemProps> = (args) => (
  <Sidenav>
    <SidenavItem {...args}></SidenavItem>
  </Sidenav>
);

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = { icon: 'home', children: 'Startseite' };

export const Primary = Template.bind({});
Primary.args = {};
