import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { UIFormCheckbox, UIFormCheckboxProps } from './UIFormCheckbox';

export default {
  title: 'UI - Forms/UIFormCheckbox',
  component: UIFormCheckbox,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UIFormCheckboxProps> = (args) => {
  const [isChecked, setChecked] = useState(false);

  return <UIFormCheckbox value={isChecked} onChange={(el) => setChecked(el.target.checked)} {...args} />;
};

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = { title: 'Placeholder:', subtitle: 'Placeholder', text: 'Placeholder' };
