import { Story, Meta } from "@storybook/react";
import { useState } from "react";
import { Tag } from "react-tag-input";
import { TagInput, TagInputProps } from "../components/TagInput";

export default {
  title: "Data/TagInput",
  component: TagInput,
} as Meta;

const Template: Story<TagInputProps> = (args) => <TagInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Insira as tags desse post",
  tags: [{ id: "1", text: "Javascript" }],
};

export const MultipleTags = Template.bind({});
MultipleTags.args = {
  placeholder: "Insira as tags desse post",
  tags: [
    { id: "1", text: "Javascript" },
    { id: "2", text: "Java" },
    { id: "3", text: "Vue" },
    { id: "4", text: "C++" },
    { id: "5", text: "Python" },
    { id: "6", text: "React" },
  ],
};

export function LiveExample() {
  const [tags, setTags] = useState<Tag[]>([]);

  function handleAddTag(tag: Tag) {
    setTags([...tags, tag]);
  }

  function handleDeleteTag(index: number) {
    setTags(tags.filter((_, i) => i !== index));
  }

  return (
    <TagInput
      placeholder="Insira as tags deste post"
      tags={tags}
      onAdd={handleAddTag}
      onDelete={handleDeleteTag}
    />
  );
}
