import { InputHTMLAttributes } from "react";
import * as I from "./Input.styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, ...InputProps }: InputProps) {
  return (
    <I.Wrapper>
      {!!label && <span>{label}:</span>} <input type="text" {...InputProps} />{" "}
    </I.Wrapper>
  );
}
