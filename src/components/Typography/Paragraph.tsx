import { ReactNode } from "react";
import styled from "styled-components";

export interface ParagraphProps {
  children: ReactNode;
  size?: "default" | "small";
}

export function Paragraph({ children, size = "default" }: ParagraphProps) {
  return <StyledParagrph size={size}>{children}</StyledParagrph>;
}

const StyledParagrph = styled.p<{ size: "default" | "small" }>`
  font-size: ${({ size }) => (size === "small" ? 12 : 14)}px;
  line-height: ${({ size }) => (size === "small" ? 20 : 25)}px;
  color: #274060;
`;
