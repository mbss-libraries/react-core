import React, { Fragment } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { UIErrorSnackbar, UIErrorSnackbarProps } from './UIErrorSnackbar';

export default {
  title: '???/UIErrorSnackbar',
  component: UIErrorSnackbar,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UIErrorSnackbarProps> = (args) => <UIErrorSnackbar {...args} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = {
  message: 'Validation failed!',
  children: (
    <Fragment>
      <p>- :key: must be a number.</p>
    </Fragment>
  ),
};
