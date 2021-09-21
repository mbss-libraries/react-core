import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { PageLoader, PageLoaderProps } from './PageLoader';

export default {
  title: 'Layout/PageLoader',
  component: PageLoader,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<PageLoaderProps> = (args) => <PageLoader {...args} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = {};

export const Primary = Template.bind({});
Primary.args = {};
