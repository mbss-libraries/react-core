import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { UIAlert, UIAlertProps } from './UIAlert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default {
  title: 'UI - Elements/UIAlert',
  component: UIAlert,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UIAlertProps> = (args) => (
  <UIAlert message="asdasd">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
    sit amet.
  </UIAlert>
);

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = { message: 'Placeholder' };
