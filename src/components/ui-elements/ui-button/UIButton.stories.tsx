import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { UIButton, UIButtonProps } from './UIButton';

export default {
  title: 'UI - Elements/Button',
  component: UIButton,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UIButtonProps> = (args) => <UIButton {...args} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = { children: 'Placeholder' };

export const Icon = Template.bind({});
Icon.args = { icon: 'star', children: 'Placeholder' };

export const Outlined = Template.bind({});
Outlined.args = { type: 'outlined', children: 'Placeholder' };
