import styled from "styled-components";

interface WrapperProps {
  type: "primary" | "default";
}

const highlightColor = {
  primary: "#0099FF",
  default: "#274060",
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;

  span.description {
    font-size: 12px;
    color: #274060;
    font-weight: 400;
  }

  > div {
    --color: ${({ type }) => highlightColor[type]};
    --font-size: 18px;

    span {
      font-size: var(--font-size);
      color: var(--color);
    }

    span.prefix {
      font-weight: 400;
    }

    span.value {
      font-weight: 900;
    }
  }
`;
