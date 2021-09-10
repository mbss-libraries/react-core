import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { __name__, __name__Props } from "./__name__";

export default {
  title: "???/__name__",
  component: __name__,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<__name__Props> = (args) => <__name__ {...args} />;

// Reuse that template for creating different stories
export const Basic = Template.bind({});
Basic.args = {};
