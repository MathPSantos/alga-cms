import { Story, Meta } from "@storybook/react";
import {
  ValueDescriptor,
  ValueDescriptorProps,
} from "../components/ValueDescriptor/ValueDescriptor";

export default {
  title: "Forms/ValueDescriptor",
  component: ValueDescriptor,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as Meta;

const Template: Story<ValueDescriptorProps> = (args) => (
  <ValueDescriptor {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 560322.02,
  description: "Ganhos na semana",
};

export const DefaultCurrency = Template.bind({});
DefaultCurrency.args = {
  value: 560322.02,
  description: "Ganhos na semana",
  prefix: "R$",
};

export const Primary = Template.bind({});
Primary.args = {
  value: 560322.02,
  description: "Ganhos na semana",
  type: "primary",
};

export const PrimaryCurrency = Template.bind({});
PrimaryCurrency.args = {
  value: 560322.02,
  description: "Ganhos na semana",
  prefix: "R$",
  type: "primary",
};
