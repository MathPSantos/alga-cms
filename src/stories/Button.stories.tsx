import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "../app/components/Button";

export default {
  title: "Forms/Button",
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Button",
  disabled: true,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  label: "Button",
  disabled: false,
};

export const Unstyled = Template.bind({});
Unstyled.args = {
  variant: "unstyled",
  label: "Button",
  disabled: false,
};
