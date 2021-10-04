import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { UIFormBaseContainer, UIFormBaseContainerProps } from './UIFormBaseContainer';

export default {
  title: 'UI - Forms/UIFormBaseContainer',
  component: UIFormBaseContainer,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UIFormBaseContainerProps> = (args) => <UIFormBaseContainer {...args} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = {};
