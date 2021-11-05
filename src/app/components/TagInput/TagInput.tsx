import * as TI from "./TagInput.styles";
import { WithContext as ReactTagInput, Tag } from "react-tag-input";

export interface TagInputProps {
  onAdd: (tag: Tag) => void;
  onDelete: (value: number) => void;
  placeholder: string;
  tags: Tag[];
}

const keyCodes = {
  comma: 188,
  enter: 13,
  tab: 9,
};

export function TagInput({
  onAdd,
  onDelete,
  placeholder,
  tags,
}: TagInputProps) {
  return (
    <TI.Wrapper>
      <ReactTagInput
        placeholder={placeholder}
        tags={tags}
        handleAddition={onAdd}
        handleDelete={onDelete}
        allowDragDrop={false}
        autofocus={false}
        delimiters={[keyCodes.comma, keyCodes.enter, keyCodes.tab]}
      />
    </TI.Wrapper>
  );
}
