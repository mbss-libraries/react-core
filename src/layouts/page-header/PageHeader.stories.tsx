import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { PageHeader, PageHeaderProps } from './PageHeader';

export default {
  title: 'Layout/PageHeader',
  component: PageHeader,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<PageHeaderProps> = (args) => <PageHeader {...args} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = {};

export const Primary = Template.bind({});
Primary.args = {};
