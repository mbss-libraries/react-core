import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { UIInput, UIInputProps } from './UIInput';

export default {
  title: 'UI - Elements/UIInput',
  component: UIInput,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UIInputProps> = (args) => <UIInput {...args} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = { value: 'asd' };
