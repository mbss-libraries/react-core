import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { UITooltip, UITooltipProps } from "./UITooltip";

export default {
  title: "???/UITooltip",
  component: UITooltip,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<UITooltipProps> = (args) => <UITooltip {...args} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = {};
