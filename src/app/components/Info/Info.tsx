import Icon from "@mdi/react";
import { mdiInformation } from "@mdi/js";

import { Paragraph } from "../Typography/Paragraph";
import * as I from "./Info.styles";

export interface InfoProps {
  title: string;
  description: string;
}

export function Info({ title, description }: InfoProps) {
  return (
    <I.Wrapper>
      <I.Content>
        <I.Icon>
          <Icon color="#09f" size="48px" path={mdiInformation} />
        </I.Icon>
        <I.Messages>
          <I.Title>{title}</I.Title>
          <Paragraph>{description}</Paragraph>
        </I.Messages>
      </I.Content>
    </I.Wrapper>
  );
}
