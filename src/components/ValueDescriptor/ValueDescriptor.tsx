import * as V from "./ValueDescriptor.styles";

export interface ValueDescriptorProps {
  description: string;
  value: number;
  prefix?: string;
  type?: "primary" | "default";
  locale?: "pt-br" | "en";
}

export function ValueDescriptor({
  description,
  value,
  prefix,
  type = "default",
  locale = "pt-br",
}: ValueDescriptorProps) {
  return (
    <V.Wrapper type={type}>
      <span className="description">{description}:</span>

      <div>
        {!!prefix && <span className="prefix">{prefix}</span>}
        <span className="value">{value.toLocaleString(locale)}</span>
      </div>
    </V.Wrapper>
  );
}
