import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { ConfirmButton, ConfirmButtonProps } from "./ConfirmButton";

export default {
  title: "Other/ConfirmButton",
  component: ConfirmButton,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ConfirmButtonProps> = (args) => <ConfirmButton {...args} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = {};
