import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { UIFormRow, UIFormRowProps } from './UIFormRow';

export default {
  title: 'UI - Forms/UIFormRow',
  component: UIFormRow,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UIFormRowProps> = (args) => <UIFormRow {...args} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = {};
