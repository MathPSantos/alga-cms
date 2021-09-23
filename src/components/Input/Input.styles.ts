import styled from "styled-components";
import { transparentize } from "polished";

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 56px;

  span.label {
    font-size: 14px;
    font-weight: 500;
    color: #274060;
  }

  input {
    box-sizing: border-box;
    height: 20px;
    font-size: 18px;
    font-weight: 500;

    padding-bottom: 6px;
    border: none;
    outline: none;

    color: #274060;

    border-radius: 0;
    border-bottom: 1px solid #274060;

    &::placeholder {
      color: ${transparentize(0.5, "#274060")};
    }
  }
`;
