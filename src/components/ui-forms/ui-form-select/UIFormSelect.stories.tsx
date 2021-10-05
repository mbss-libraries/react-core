import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { UIFormSelect, UIFormSelectProps } from './UIFormSelect';
import Select from 'rc-select';

export default {
  title: 'UI - Forms/UIFormSelect',
  component: UIFormSelect,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UIFormSelectProps> = (args) => (
  <UIFormSelect {...args} style={{ minWidth: '50vw' }}>
    <Select.Option value="1">Placeholder 1</Select.Option>
    <Select.Option value="2">Placeholder 2</Select.Option>
  </UIFormSelect>
);

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = { allowClear: true, placeholder: 'Select a value ...' };
export const Multiple = Template.bind({});
Multiple.args = { mode: 'multiple' };
export const Tags = Template.bind({});
Tags.args = { mode: 'tags' };
