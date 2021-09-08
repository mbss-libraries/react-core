import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { UISpinner, UISpinnerProps } from './UISpinner';

export default {
  title: 'UI - Elements/UISpinner',
  component: UISpinner,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UISpinnerProps> = (args) => <UISpinner {...args} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = {};

export const Primary = Template.bind({});
Primary.args = {};
