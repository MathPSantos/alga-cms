import { ButtonHTMLAttributes } from "react";
import * as B from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "danger" | "unstyled";
}

export function Button({ variant = "primary", label, ...rest }: ButtonProps) {
  return (
    <B.Wrapper variant={variant} {...rest}>
      {label}
    </B.Wrapper>
  );
}
