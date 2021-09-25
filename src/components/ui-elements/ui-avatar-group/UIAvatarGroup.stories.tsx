import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { UIAvatarGroup, UIAvatarGroupProps } from './UIAvatarGroup';
import { Avatar } from 'antd';

export default {
  title: 'UI - Elements/UIAvatarGroup',
  component: UIAvatarGroup,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UIAvatarGroupProps> = (args) => (
  <UIAvatarGroup size={52} {...args}>
    <Avatar>SS</Avatar>
    <Avatar src={'https://lh3.googleusercontent.com/a-/AOh14Giu-q1h6YIhqWbJgBwJgW0GRKEYBBRY9B9aI9EkGg=s96-c'}>SS</Avatar>
    <Avatar>MB</Avatar>
    <Avatar>RT</Avatar>
    <Avatar>HG</Avatar>
  </UIAvatarGroup>
);

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = { maxCount: 3 };
