import * as F from "./FieldDescriptor.styles";

export interface FieldDescriptorProps {
  label: string;
  value: string;
}

export function FieldDescriptor({ label, value }: FieldDescriptorProps) {
  return (
    <F.Wrapper>
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </F.Wrapper>
  );
}
