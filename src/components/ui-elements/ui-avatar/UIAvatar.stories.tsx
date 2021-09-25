import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { UIAvatar, UIAvatarProps } from './UIAvatar';

export default {
  title: 'UI - Elements/UIAvatar',
  component: UIAvatar,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UIAvatarProps> = (args) => <UIAvatar {...args} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = { size: 75, src: 'https://lh3.googleusercontent.com/a-/AOh14Giu-q1h6YIhqWbJgBwJgW0GRKEYBBRY9B9aI9EkGg=s96-c' };
export const Border = Template.bind({});
Border.args = {
  border: { width: 2, color: 'red' },
  size: 75,
  src: 'https://lh3.googleusercontent.com/a-/AOh14Giu-q1h6YIhqWbJgBwJgW0GRKEYBBRY9B9aI9EkGg=s96-c',
};
export const Tooltip = Template.bind({});
Tooltip.args = {
  tooltipTitle: 'Max Mustermann',
  size: 75,
  src: 'https://lh3.googleusercontent.com/a-/AOh14Giu-q1h6YIhqWbJgBwJgW0GRKEYBBRY9B9aI9EkGg=s96-c',
};
export const Initinals = Template.bind({});
Initinals.args = {
  border: { width: 1, color: 'black' },
  children: <span style={{ fontSize: 24 }}>MM</span>,
  showImage: false,
  size: 75,
  src: 'https://lh3.googleusercontent.com/a-/AOh14Giu-q1h6YIhqWbJgBwJgW0GRKEYBBRY9B9aI9EkGg=s96-c',
};
