import { Story, Meta } from "@storybook/react";
import { Info, InfoProps } from "../app/components/Info/Info";

export default {
  title: "Data/Info",
  component: Info,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as Meta;

const Template: Story<InfoProps> = (args) => <Info {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Post não encontrado",
  description:
    "Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts.",
};
