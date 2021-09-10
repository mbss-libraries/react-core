import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Header, HeaderProps } from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<HeaderProps> = (args) => <Header {...args} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = {};

export const Primary = Template.bind({});
Primary.args = {};
