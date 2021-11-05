import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SvgWrapper = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Svg = styled.svg`
  transform: rotate(90deg);
`;

export const Circle = styled.circle`
  transition: stroke-dashoffset 850ms ease;
`;

export const CircleBG = styled.circle.attrs({
  fill: "#fff",
})``;

export const Percentage = styled.span<{ color: string }>`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  color: ${({ color }) => color};

  font-weight: 900;
  font-size: 1.2rem;
`;

export const Caption = styled.span<{ theme: string }>`
  font-size: 1rem;
  font-weight: 400;
  text-transform: lowercase;
  color: ${({ theme }) => theme};
`;
