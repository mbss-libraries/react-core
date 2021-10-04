import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { UITable, UITableProps } from './UITable';

export default {
  title: 'UI - Elements/UITable',
  component: UITable,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UITableProps> = (args) => <UITable {...args} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = {
  className: 'w-100',
  searchable: true,
  pagination: true,
  header: [{ component: 'ID' }, { sortable: true, component: 'Name' }, { sortable: true, component: 'Age' }],
  body: [
    [{ component: '1' }, { value: 'Max Mustermann', component: 'Max Mustermann' }, { value: 23, component: 23 }],
    [{ component: '2' }, { value: 'Hans Wurst', component: 'Hans Wurst' }, { value: 54, component: 54 }],
  ],
};
