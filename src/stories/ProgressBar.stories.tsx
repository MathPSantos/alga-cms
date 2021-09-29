import { Meta } from "@storybook/react";
import { ProgressBar } from "../components/ProgressBar/ProgressBar";

export default {
  title: "Data/ProgressBar",
  component: ProgressBar,
} as Meta;

export function Primary() {
  return <ProgressBar label="javascript" progress={50} />;
}

export function Secondary() {
  return <ProgressBar label="javascript" progress={50} theme="secondary" />;
}

export function Complete() {
  return <ProgressBar label="javascript" progress={100} />;
}

export function ZeroProgress() {
  return <ProgressBar label="javascript" progress={0} />;
}

export function ProgressInHalfOfText() {
  return <ProgressBar label="javascript" progress={3.5} />;
}
