import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { UIFormInput, UIFormInputProps } from './UIFormInput';

export default {
  title: 'UI - Forms/UIFormInput',
  component: UIFormInput,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UIFormInputProps> = (args) => <UIFormInput {...args} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = { title: 'Placeholder:', subtitle: 'Placeholder', inputType: 'color' };
