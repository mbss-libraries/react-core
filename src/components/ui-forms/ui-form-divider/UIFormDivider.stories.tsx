import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { UIFormDivider, UIFormDividerProps } from './UIFormDivider';
import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'UI - Forms/UIFormDivider',
  component: UIFormDivider,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UIFormDividerProps> = (args) => <UIFormDivider {...args} style={{ minWidth: '50vw' }} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = { title: 'PLACEHOLDER', icon: 'globe' };
