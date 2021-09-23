import { Story, Meta } from "@storybook/react";
import { Paragraph, ParagraphProps } from "../components/Typography/Paragraph";

export default {
  title: "Typography/Paragraph",
  component: Paragraph,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

let children =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel";

export const Default = Template.bind({});
Default.args = {
  children,
  size: "default",
};

export const Small = Template.bind({});
Small.args = {
  children,
  size: "small",
};
