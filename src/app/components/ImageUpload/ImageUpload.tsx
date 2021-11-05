import { mdiUpload } from "@mdi/js";
import Icon from "@mdi/react";
import { ChangeEvent, useState } from "react";

import { Button } from "../Button";

import * as IU from "./ImageUpload.styles";

export interface ImageUploadProps {
  label: string;
}

export function ImageUpload({ label }: ImageUploadProps) {
  const [filePreview, setFilePreview] = useState<string | null>(null);

  function handleImageUpload({ target }: ChangeEvent<HTMLInputElement>) {
    const file = target?.files![0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", (e) => {
        setFilePreview(String(e.target?.result));
      });

      reader.readAsDataURL(file);
    }
  }

  if (filePreview)
    return (
      <IU.ImagePreviewWrapper>
        <IU.ImagePreview preview={filePreview}>
          <Button
            variant="primary"
            label="Remover Imagem"
            onClick={() => setFilePreview(null)}
          />
        </IU.ImagePreview>
      </IU.ImagePreviewWrapper>
    );

  return (
    <IU.Wrapper>
      <IU.Label>
        <Icon size={"24px"} path={mdiUpload} />
        {label}

        <IU.Input type="file" onChange={handleImageUpload} />
      </IU.Label>
    </IU.Wrapper>
  );
}
