import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { UICard, UICardProps } from './UICard';

export default {
  title: 'UI - Elements/Card',
  component: UICard,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UICardProps> = (args) => <UICard {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { children: 'Test' };
