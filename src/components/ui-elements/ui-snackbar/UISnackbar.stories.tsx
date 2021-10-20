import React, { Fragment, useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { UISnackbar, UISnackbarProps } from './UISnackbar';
import { UIButton } from '../ui-button/UIButton';
import { UIAlert } from '../ui-alert/UIAlert';

export default {
  title: 'UI - Elements/UISnackbar',
  component: UISnackbar,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UISnackbarProps> = (args) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Fragment>
      <UIButton onClick={() => setOpen(true)}>Show Snackbar</UIButton>
      <UISnackbar {...args} open={isOpen} onClose={() => setOpen(false)}>
        <UIAlert message="asdasd">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
        </UIAlert>
      </UISnackbar>
    </Fragment>
  );
};
// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = {};
