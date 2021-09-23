import styled from "styled-components";

const THEME = {
  primary: {
    bg: "#0099FF",
    color: "#FFFFFF",
  },
  danger: {
    bg: "#F84735",
    color: "#FFFFFF",
  },
  unstyled: {
    bg: "#FFFFFF",
    color: "#00243D",
  },
};

export const Wrapper = styled.button<{
  variant: "primary" | "danger" | "unstyled";
}>`
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-inline-start: 1rem;
  padding-inline-end: 1rem;

  font-size: 1rem;
  font-weight: 700;

  border-radius: 0.25rem;
  border: none;
  outline: transparent;

  color: ${({ variant }) => THEME[variant].color};
  background-color: ${({ variant }) => THEME[variant].bg};

  cursor: pointer;
  transition: all 0.2s;

  &:hover,
  &:focus {
    filter: brightness(0.95);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;
