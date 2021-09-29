import { Meta } from "@storybook/react";
import { NoData } from "../components/NoData/NoData";

export default {
  title: "Data/NoData",
  component: NoData,
} as Meta;

export function Default() {
  return <NoData />;
}

export function FixedHeight() {
  return <NoData height={240} />;
}
