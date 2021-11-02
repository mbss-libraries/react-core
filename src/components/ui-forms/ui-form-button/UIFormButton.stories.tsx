import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { UIFormButton, UIFormButtonProps } from "./UIFormButton";

export default {
  title: "UI - Forms/UIFormButton",
  component: UIFormButton,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UIFormButtonProps> = (args) => <UIFormButton {...args} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = {title: "Placeholder"};
